import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import postgresErrorCode from 'src/database/postgresErrorCodes';
import { UserService } from 'src/user/user.service';
import CreateUserDto from './../user/user.create.dto';
import User from './../user/user.entity';
import TokenPayload from './interfaces/tokenPayload.i';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.findByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {}
  }

  public getCookieWithJwtToken(user: User) {
    const payload: TokenPayload = { user };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }

  //logout sur browser
  public getCookieForLogout() {
    return `Authentication=; HttpOnly; Path=/; Max-Age:0`;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const arePasswordsMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );

    if (!arePasswordsMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
