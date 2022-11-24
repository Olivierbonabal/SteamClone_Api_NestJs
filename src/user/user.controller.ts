import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

//localhost:8080/user/id
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
}
