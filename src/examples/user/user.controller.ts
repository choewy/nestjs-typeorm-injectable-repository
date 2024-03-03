import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDto } from './dtos';

@ApiTags('Users')
@Controller('users')
export class UserContorller {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get Users' })
  @ApiOkResponse({ type: [UserDto] })
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiCreatedResponse({ type: UserDto })
  async createUser() {
    return this.userService.createUser();
  }

  @Post(':id(\\d+)/item')
  @ApiOperation({ summary: 'Give Item to User' })
  @ApiCreatedResponse({ type: UserDto })
  async giveItemToUser(@Param('id') id: number) {
    return this.userService.giveItemToUser(id);
  }

  @Patch(':id(\\d+)')
  @ApiOperation({ summary: 'Update User Name(randomly)' })
  @ApiOkResponse({ type: UserDto })
  async updateUser(@Param('id') id: number) {
    return this.userService.updateUser(id);
  }

  @Delete(':id(\\d+)')
  @ApiOperation({ summary: 'Delete User' })
  @ApiOkResponse({ type: UserDto })
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
