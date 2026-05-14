import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';
import { LoginDto } from '../dto/login.dto';
import { Token, User } from 'generated/prisma';
import { compareHash } from '../utils/hash.util';

@Injectable()
export class LoginService {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(
    body: LoginDto,
  ): Promise<{
    user: {
      id_user: string;
      pseudo: string;
      email: string;
      avatar: string | null;
    };
  }> {
    const user = await this.checkUser(body);

    return {
      user: {
        id_user: user.id_user,
        pseudo: user.pseudo,
        email: user.email,
        avatar: user.avatar,
      },
    };
  }

  private async checkUser(body: LoginDto): Promise<User> {
    const { pseudo, password } = body;

    const user = pseudo ? await this.authRepository.findByPseudo(pseudo) : null;

    if (!user) throw new UnauthorizedException('Identifiants invalides');

    const passwordMatch = await compareHash(password, user.password);
    if (!passwordMatch)
      throw new UnauthorizedException('Identifiants invalides');

    return user;
  }
}
