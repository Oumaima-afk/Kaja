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
import { RegisterSwaggerDto, type RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: RegisterSwaggerDto })
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

  @Post('login')
  @ApiBody({})
  @ApiOperation({ summary: 'Connexion à un compte' })
  @ApiOkResponse({ description: 'Connexion réussie' })
  @ApiBadRequestResponse({ description: 'Données invalides' })
  async login(@Body() body: RegisterDto) {
    const { user } = await this.authService.login(body);

    return { message: 'Connexion réussie', user };
  }

  @Post('logout')
  @ApiBody({})
  @ApiOperation({ summary: "Déconnexion d'un compte" })
  @ApiOkResponse({ description: 'Déconnexion réussie' })
  @ApiBadRequestResponse({ description: 'Données invalides' })
  async logout() {
    await this.authService.logout();
    return { message: 'Déconnexion réussie' };
  }
}
