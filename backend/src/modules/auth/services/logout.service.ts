import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class LogoutService {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(): Promise<void> {}
}
