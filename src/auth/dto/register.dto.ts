import { IsEmail, IsString, IsIn, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['ALUNO', 'PROFESSOR'])
  role: 'ALUNO' | 'PROFESSOR';
}
