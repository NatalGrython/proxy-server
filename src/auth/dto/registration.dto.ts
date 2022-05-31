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
    title: 'Confirm password',
    description: 'Confirm password user',
    example: '12345678',
    required: true,
    minLength: 8,
  })
  readonly confirmPassword: string;
  @ApiProperty({
    title: 'Node id',
    description: 'BlockChain node id',
    example: 1,
    required: true,
  })
  readonly nodeId: number;
  @ApiProperty({
    title: 'Role user',
    description: 'Role user',
    enum: ['teacher', 'student'],
    required: true,
  })
  readonly type: UserRoles;
}
