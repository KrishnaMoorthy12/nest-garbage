import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServer: UserService) {}

  @Get()
  getAllUsers() {
    return this.userServer.getAllUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userServer.createUser(user);
  }
}
