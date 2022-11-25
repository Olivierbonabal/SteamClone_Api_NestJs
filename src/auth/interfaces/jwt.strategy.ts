import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import TokenPayload from './tokenPayload.i';

//j'extrait le cookie et vverifie s'il est correct
@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          console.log(request?.cookies);
        //   return request.cookies.Authentication;
        //   return request && request.cookies && request.cookies.Authentication;
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: TokenPayload) {
    console.log(payload.user);
    return payload.user;
  }
}

export default JwtStrategy;
