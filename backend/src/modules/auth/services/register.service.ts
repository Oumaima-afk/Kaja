import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';
import { RegisterDto } from '../dto/register.dto';
import { User } from '@prisma/client';
import { ensureUniqueness } from '@/common/utils/uniqueness.utils';
import { hashData } from '../utils/hash.util';

@Injectable()
export class RegisterService {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(body: RegisterDto): Promise<User> {
    await this.ensureUserUniqueness(body);

    const hashedPassword = await hashData(body.password);

    const newUser = await this.authRepository.register({
      pseudo: body.pseudo,
      email: body.email,
      password: hashedPassword,
      avatar: body.avatar,
    });

    return newUser;
  }

  private async ensureUserUniqueness(body: RegisterDto): Promise<void> {
    const { pseudo, email } = body;

    await Promise.all([
      ensureUniqueness(
        (pseudo) => this.authRepository.findByPseudo(pseudo),
        pseudo,
        'Pseudo',
      ),
      ensureUniqueness(
        (email) => this.authRepository.findByEmail(email),
        email,
        'Email',
      ),
    ]);
  }
}
