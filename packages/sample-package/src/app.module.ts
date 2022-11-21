import { Module } from '@nestjs/common'
import { GreetingModule } from '@bob/greeting-service'

@Module({
  imports: [GreetingModule]
})
export class AppModule {}
