import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    title: 'Login',
    description: 'Login user',
    example: 'login@email.com',
    required: true,
  })
  readonly login: string;
  @ApiProperty({
    title: 'Password',
    description: 'Password user',
    example: '12345678',
    minLength: 8,
    required: true,
  })
  readonly password: string;
}
