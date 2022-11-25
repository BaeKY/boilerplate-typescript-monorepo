import { Test } from '@nestjs/testing'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from '../src/app.module'

describe('GreetingModule', () => {
  let app: NestFastifyApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter())

    await app.init()
    await app.getHttpAdapter().getInstance().ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('greeting! ', async () => {
    const [name1, name2]: [string, string] = ['Bob', 'Sumin']

    return app
      .inject({
        method: 'POST',
        url: '/gql',
        payload: {
          query: `query { test1: greeting(name: "${name1}")\ntest2: greeting(name: "${name2}")}`
        }
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200)
        expect(JSON.parse(result.payload)).toMatchObject({
          data: {
            test1: `Hello, ${name1}!`,
            test2: `Hello, ${name2}!`
          }
        })
      })
  })
})
