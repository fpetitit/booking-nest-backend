import { Controller, Get, Request, Post, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { SlotsService } from './slots/slots.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private slotsService: SlotsService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('slots')
  getSlots(@Request() req) {
    return this.slotsService.fetch(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('slots/book/:slotId')
  bookSlot(@Param() params, @Request() req) {
    return this.slotsService.book(params.slotId, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('slots/unbook/:slotId')
  unbookSlot(@Param() params, @Request() req) {
    return this.slotsService.unbook(params.slotId, req.user);
  }
}
