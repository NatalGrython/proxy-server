import { UserRoles } from 'src/types';

export class RegistrationDto {
  readonly login: string;
  readonly password: string;
  readonly confirmPassword: string;
  readonly nodeId: number;
  readonly role: UserRoles;
}
