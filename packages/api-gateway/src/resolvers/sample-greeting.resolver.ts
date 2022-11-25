import { Args, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class SampleResolver {
  @Query(() => String)
  public async greeting(@Args('name', { type: () => String }) name: string): Promise<string> {
    return `Hello, ${name}!`
  }
}
