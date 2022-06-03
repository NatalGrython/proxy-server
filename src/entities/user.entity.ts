import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Node } from './node.entity';

@Entity()
export class User {
  @ApiProperty({
    title: 'User id',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    title: 'User Blockcahin Address',
    example:
      'MEgCQQC0Ygd2nR8dy6IacCKhf0QVY3uDTHBhhMuPbvGyVduPE+kH4zVLbK+TGM/gD3FtdnYYhGTVvIhO5SDNih28Wdp/AgMBAAE=',
  })
  @Column()
  address: string;

  @ApiProperty({
    title: 'User privateKey',
    example:
      'MEgCQQC0Ygd2nR8dy6IacCKhf0QVY3uDTHBhhMuPbvGyVduPE+kH4zVLbK+TGM/gD3FtdnYYhGTVvIhO5SDNih28Wdp/AgMBAAE=',
  })
  @Column()
  privateKey: string;

  @ApiProperty({
    title: 'User password hash',
    example: 'hk12h3jh1hk12h3hj1kswkdk1kk2',
  })
  @Column()
  password: string;

  @ApiProperty({
    title: 'User login',
    example: 'login@emial.com',
  })
  @Column()
  login: string;

  @ApiProperty({
    title: 'User name',
    example: 'Кирилл',
  })
  @Column()
  name: string;

  @ApiProperty({
    title: 'User surname',
    example: 'Хорошилов',
  })
  @Column()
  surname: string;

  @ApiProperty({
    title: 'User patronymic',
    example: 'Сергеевич',
  })
  @Column()
  patronymic: string;

  @ApiProperty({
    title: 'User role',
    enum: ['teacher', 'student'],
  })
  @Column()
  role: string;

  @ApiProperty({
    title: 'User node',
    type: () => Node,
  })
  @ManyToOne(() => Node, (node) => node.users, { cascade: true })
  node: Node;
}
