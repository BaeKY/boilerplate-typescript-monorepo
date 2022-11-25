import { SampleResolver } from './sample-greeting.resolver'
import { Test, TestingModule } from '@nestjs/testing'

describe('sample-greeting-resolver.ts', () => {
  let sampleResolver: SampleResolver

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [SampleResolver]
    }).compile()
    sampleResolver = moduleRef.get<SampleResolver>(SampleResolver)
  })

  it('Greeting Resolver Defined', () => {
    expect(sampleResolver).toBeDefined()
  })

  it('Greeting Test', async () => {
    const name = 'Bob'
    expect(await sampleResolver.greeting(name)).toEqual(`Hello, ${name}!`)
  })
})
