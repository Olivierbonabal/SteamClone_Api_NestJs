import { Controller, Get, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/jwtAuth.Guard';

@Controller('collections')
export class CollectionsController {
  @Get()
  @UseGuards(JwtAuthGuard)
  async getCollections() {
    return 'you should get collections';
  }
}
