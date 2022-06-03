import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from 'src/types';

export class RegistrationDto {
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
    required: true,
    minLength: 8,
  })
  readonly password: string;
  @ApiProperty({
    title: 'Role user',
    description: 'Role user',
    enum: ['teacher', 'student'],
    required: true,
  })
  readonly type: UserRoles;

  @ApiProperty({
    title: 'User name',
    description: 'User name',
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    title: 'User surname',
    description: 'User surname',
    required: true,
  })
  readonly surname: string;

  @ApiProperty({
    title: 'User patronymic',
    description: 'User patronymic',
    required: true,
  })
  readonly patronymic: string;
}
