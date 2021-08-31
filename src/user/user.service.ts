import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, genSalt, hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginCredentialsDto } from './dtos/login-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async signIn({ email, password }: LoginCredentialsDto) {
    const user = await this.userRepo.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    if (await compare(password, user.password)) {
      const payload = { ...user };
      delete payload.password;

      return sign(payload, 'my-secret', { expiresIn: '1h', issuer: 'Krish' });
    }
  }

  async signUp({ name, email, password }: CreateUserDto) {
    const salt = await genSalt(6);
    const hashedPassword = await hash(password, salt);
    const user = this.userRepo.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.userRepo.save(user);
  }
}
