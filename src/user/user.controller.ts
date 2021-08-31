import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginCredentialsDto } from './dtos/login-credentials.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userServer: UserService) {}

  @Post('/signin')
  signIn(@Body() loginCredentials: LoginCredentialsDto) {
    return this.userServer.signIn(loginCredentials);
  }

  @Post('/signup')
  signUp(@Body() user: CreateUserDto) {
    return this.userServer.signUp(user);
  }
}
