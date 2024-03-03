import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDto } from './dtos';

@ApiTags('Users')
@Controller('users')
export class UserContorller {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: [UserDto] })
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  async createUser() {
    return this.userService.createUser();
  }

  @Patch(':id(\\d+)')
  @ApiOkResponse({ type: UserDto })
  async updateUser(@Param('id') id: number) {
    return this.userService.updateUser(id);
  }

  @Delete(':id(\\d+)')
  @ApiOkResponse({ type: UserDto })
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
