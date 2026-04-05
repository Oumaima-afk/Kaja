import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class RegisterService {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(body: RegisterDto): Promise<void> {}
}
