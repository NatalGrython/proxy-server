import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Node {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  port: number;

  @OneToMany(() => User, (user) => user.node)
  users: User[];
}
