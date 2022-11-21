import { Body, Controller, Inject, Post } from '@nestjs/common'
import { GreetingSomeoneRequest } from './dtos'
import { GreetingService } from './service'

@Controller('greeting')
export class GreetingController {
  constructor(@Inject(GreetingService) private readonly greetingService: GreetingService) {}

  @Post()
  public greetingForSomeone(@Body() body: GreetingSomeoneRequest) {
    return this.greetingService.greetingForSomeone(body.name)
  }
}
