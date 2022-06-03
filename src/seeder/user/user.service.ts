import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ExcelService } from '../exel/exel.service';

@Injectable()
export class UserSeederService {
  constructor(
    private authService: AuthService,
    private excelService: ExcelService,
  ) {}

  async importUsers() {
    const usersRows = this.excelService.check();
    for (const user of usersRows) {
      await this.authService.registration({
        ...user,
        type: user.role === 'Студент' ? 'student' : 'teacher',
      });
    }
  }
}
