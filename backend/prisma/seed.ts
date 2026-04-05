import * as dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient({});

async function main() {
  await prisma.participation.deleteMany();
  await prisma.token.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  const hashed = await bcrypt.hash('Password123!', 10);

  const alice = await prisma.user.create({
    data: {
      pseudo: 'Alice',
      email: 'alice@kaja.fr',
      password: hashed,
      role: 'ADMIN',
    },
  });

  const bob = await prisma.user.create({
    data: {
      pseudo: 'Bob',
      email: 'bob@kaja.fr',
      password: hashed,
      role: 'MEMBER',
    },
  });

  const event = await prisma.event.create({
    data: {
      title: 'Soirée Bowling',
      date: new Date('2026-05-10T20:00:00'),
      city: 'Paris',
      status: 'PUBLISHED',
      id_user: alice.id_user,
    },
  });

  await prisma.participation.createMany({
    data: [
      { id_user: alice.id_user, id_event: event.id_event, status: 'PRESENT' },
      { id_user: bob.id_user, id_event: event.id_event, status: 'PENDING' },
    ],
  });

  console.log('🌱 Seed OK');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
