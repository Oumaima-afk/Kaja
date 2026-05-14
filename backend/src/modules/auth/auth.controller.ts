import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import type { RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({})
  @ApiOperation({ summary: 'Inscrire un nouvel utilisateur' })
  @ApiOkResponse({ description: 'Nouvel utilisateur créé avec succès' })
  @ApiBadRequestResponse({ description: 'Données invalides' })
  @ApiConflictResponse({
    description: 'Un utilisateur avec ces données existe déjà',
  })
  async register(@Body() body: RegisterDto) {
    await this.authService.register(body);

    return { message: 'Inscription réussie' };
  }
}
