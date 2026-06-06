import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterService } from './services/register.service';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly registerService: RegisterService,
    private readonly loginService: LoginService,
  ) {}

  async register(body: RegisterDto) {
    return this.registerService.execute(body);
  }

  async login(body: LoginDto) {
    return this.loginService.execute(body);
  }

  async logout() {
    return this.loginService.execute();
  }
}
