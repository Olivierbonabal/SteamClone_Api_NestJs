import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './user.create.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findById(id: string) {
    // console.log(id);
    const user = await this.userRepo.findOneBy({ id });
    if (user) {
      return user;
    }

    throw new HttpException(
      "User avec cet ID n'existe pas!",
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.userRepo.create(userData);
    await this.userRepo.save(newUser);
    return newUser;
  }
}
