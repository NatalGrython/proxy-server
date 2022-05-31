import { ApiProperty } from '@nestjs/swagger';

export interface BlockChainCreditionls {
  readonly address: string;
  readonly privateKey: string;
}

export class TokenResponse {
  @ApiProperty({
    title: 'Jwt token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  readonly token: string;
}
