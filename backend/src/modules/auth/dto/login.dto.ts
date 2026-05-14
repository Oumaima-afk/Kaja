import { REGEX_PASSWORD } from '@/common/regex/email.regex';
import { REGEX_EMAIL } from '@/common/regex/password.regex';
import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const loginSchema = z.object({
  pseudo: z
    .string()
    .min(1, 'Le pseudo ne peut pas être vide')
    .max(20, 'Le pseudo ne peut pas dépasser 20 caractères'),
  email: z
    .email("Format d'email invalide")
    .regex(REGEX_EMAIL, "L'email contient des caractères non autorisés"),
  password: z
    .string()
    .min(14, 'Le mot de passe doit contenir au moins 14 caractères')
    .regex(
      REGEX_PASSWORD,
      'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial',
    ),
});

export type LoginDto = z.infer<typeof loginSchema>;

export class LoginSwaggerDto {
  @ApiProperty({
    example: 'Alice99',
    description: 'Pseudo unique (max 20 caractères)',
  })
  pseudo: string;

  @ApiProperty({
    example: 'alice.dupont@mail.com',
    description: 'Adresse email valide',
  })
  email: string;

  @ApiProperty({
    example: 'MonMotDePasse14!',
    description:
      'Min 14 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial',
  })
  password: string;
}
