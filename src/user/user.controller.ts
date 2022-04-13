import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({
    type: User,
    status: 200,
    isArray: true,
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
