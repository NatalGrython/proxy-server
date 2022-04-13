import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Node } from './node.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  privateKey: string;

  @Column()
  password: string;

  @Column()
  login: string;

  @Column()
  role: string;

  @ManyToOne(() => Node, (node) => node.users, { cascade: true })
  node: Node;
}
