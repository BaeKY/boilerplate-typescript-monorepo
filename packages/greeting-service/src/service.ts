import { Injectable } from '@nestjs/common'

@Injectable()
export class GreetingService {
  public constructor() {}

  public async greetingForSomeone(name: string): Promise<string> {
    return `Hello, ${name}`
  }
}
