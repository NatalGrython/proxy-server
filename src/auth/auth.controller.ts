import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';
import { TokenResponse } from './types';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({
    type: TokenResponse,
    status: 200,
  })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiResponse({
    type: TokenResponse,
    status: 201,
  })
  @Post('registration')
  registration(@Body() registrationDto: RegistrationDto) {
    return this.authService.registration(registrationDto);
  }
}
