import { Test } from '@nestjs/testing'
import { GreetingModule } from '@bob/greeting-service'
import { GreetingService } from '@bob/greeting-service'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

describe('GreetingModule', () => {
  let app: NestFastifyApplication
  let greetingService = { greetingForSomeone: (name: string) => `Hello, ${name}` }

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GreetingModule]
    })
      .overrideProvider(GreetingService)
      .useValue(greetingService)
      .compile()
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter())

    await app.init()
    await app.getHttpAdapter().getInstance().ready()
  })

  test('/POST greeting ', () => {
    return app
      .inject({
        method: 'POST',
        url: '/greeting',
        payload: {
          name: 'Bob'
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(201)
        expect(result.payload).toEqual('Hello, Bob')
      })
  })

  afterAll(async () => {
    await app.close()
  })
})
