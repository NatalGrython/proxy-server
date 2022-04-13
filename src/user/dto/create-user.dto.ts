import { Node } from 'src/entities/node.entity';
import { UserRoles } from 'src/types';

export class CreateUserDto {
  readonly login: string;
  readonly password: string;
  readonly role: UserRoles;
  readonly node: Node;
  readonly privateKey: string;
  readonly address: string;
}
