import { REGEX_PASSWORD } from '@/common/regex/email.regex';
import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const loginSchema = z
  .object({
    pseudo: z.string().min(1, 'Veuillez entrer votre pseudo'),
    password: z
      .string()
      .min(14, 'Veuillez entrer votre mot de passe')
      .regex(REGEX_PASSWORD),
  })
  .strict();

export type LoginDto = z.infer<typeof loginSchema>;

export class LoginSwaggerDto {
  @ApiProperty({
    example: 'Alice99',
    description: 'Pseudo unique',
  })
  pseudo: string;

  @ApiProperty({
    example: 'MonMotDePasse14!',
    description: 'Mot de passe',
  })
  password: string;
}
