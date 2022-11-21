import { Module } from '@nestjs/common'
import { GreetingController } from './controller'
import { GreetingService } from './service'

@Module({
  providers: [GreetingService],
  controllers: [GreetingController]
})
export class GreetingModule {}
