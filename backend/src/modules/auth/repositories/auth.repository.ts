import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { RegisterDto } from '../dto/register.dto';
import { User } from 'generated/prisma';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async register(data: RegisterDto): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async findByPseudo(psuedo: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { psuedo } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async login(data: LoginDto): Promise<User> {
    return await this.prisma.user.findUnique({ data });
  }

  async logout(): Promise<User> {
    return await this.prisma.user.findUnique({});
  }
}
