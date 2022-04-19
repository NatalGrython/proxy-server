import { ApiProperty } from '@nestjs/swagger';

export class CreateNodeDto {
  @ApiProperty({
    title: 'Address node',
    example: '192.168.1.1',
  })
  readonly host: string;
  @ApiProperty({
    title: 'Port node',
    example: 3000,
  })
  readonly port: number;
}
