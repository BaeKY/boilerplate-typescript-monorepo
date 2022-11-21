import { INestApplication, Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

const logger = new Logger('Bootstrap')

const bootstrap = async (port: number = 3333): Promise<INestApplication> => {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  app.enableCors({
    origin: '*'
  })

  await app
    .listen(port, '0.0.0.0')
    .then(() => {
      logger.log('Listening!')
    })
    .catch((err) => logger.error(err))
  return app
}

bootstrap()
  .then(async (app) => {
    logger.log(await app.getUrl())
  })
  .catch((err) => console.error(err))
