import { Logger } from '@nestjs/common'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { readFileSync } from 'fs'
import { BootstrapParam } from './types'

export const bootstrapParamProd: BootstrapParam = {
  fastifyOption: {
    http2: true,
    https: {
      cert: readFileSync(process.env.TLS_CERT_PATH),
      key: readFileSync(process.env.TLS_KEY_PATH)
    }
  },
  logger: ['error', 'log', 'verbose', 'warn'],
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
