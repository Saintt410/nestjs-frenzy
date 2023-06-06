import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
