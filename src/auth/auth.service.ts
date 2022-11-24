import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import postgresErrorCode from 'src/database/postgresErrorCodes';
import { UserService } from 'src/user/user.service';
import CreateUserDto from './../user/user.create.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register({ email, password }: CreateUserDto) {
    //todo: add validate email
    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await this.userService.create({
        email,
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    } catch (e) {
      if (e?.code === postgresErrorCode.uniqueViolation) {
        throw new HttpException('Email taken', HttpStatus.BAD_REQUEST);
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
