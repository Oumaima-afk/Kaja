import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterService } from './services/register.service';

@Injectable()
export class AuthService {
  constructor(private readonly registerService: RegisterService) {}

  register(body: RegisterDto) {
    return this.registerService.execute(body);
  }
}
