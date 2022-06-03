import { Injectable, Logger } from '@nestjs/common';
import { UserSeederService } from './user/user.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private userSeederService: UserSeederService,
  ) {}

  async seed() {
    await this.userSeederService.importUsers();
  }
}
