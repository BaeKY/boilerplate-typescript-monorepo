import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { BootstrapParam } from './types'

export const bootstrap = async (mainAppModule: new (...args: any[]) => any, param: BootstrapParam): Promise<void> => {
  const { enableCors, fastifyOption, logger, port, onListen, onListenError } = param

  const app = await NestFactory.create<NestFastifyApplication>(
    mainAppModule,
    new FastifyAdapter(typeof fastifyOption === 'function' ? fastifyOption() : fastifyOption),
    {
      logger
    }
  )
  enableCors(app)

  const host = '0.0.0.0'
  await app
    .listen(port, host)
    .then(async () => onListen())
    .catch((reason) => onListenError(reason))
}
