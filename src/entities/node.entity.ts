import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Node {
  @ApiProperty({
    title: 'Node id',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    title: 'Node address',
    example: '192.168.1.1',
  })
  @Column()
  address: string;

  @ApiProperty({
    title: 'Node port',
    example: 3000,
  })
  @Column()
  port: number;

  @ApiProperty({
    title: 'Users node',
    isArray: true,
    type: () => User,
  })
  @OneToMany(() => User, (user) => user.node)
  users: User[];
}
