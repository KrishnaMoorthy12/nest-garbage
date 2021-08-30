import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getAllUsers() {
    const found = await this.userRepo.find();
    console.log(found);

    return found;
  }

  createUser({ name, email, password }: CreateUserDto) {
    const user = this.userRepo.create({ name, email, password });
    return this.userRepo.save(user);
  }
}
