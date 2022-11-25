import { Logger } from '@nestjs/common'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { BootstrapParam } from './types'

export const bootstrapParamDev: BootstrapParam = {
  fastifyOption: {},
  port: +process.env.PORT,
  enableCors(app: NestFastifyApplication): void {
    app.enableCors({
      origin: ['https://localhost:5049', 'https://studio.apollographql.com'],
      credentials: true
    })
  },
  onListen(): void {
    Logger.log('Server Listening', 'Bootstrap')
  },
  onListenError(err: any): void {
    Logger.error(err, 'Bootstrap')
  }
}
