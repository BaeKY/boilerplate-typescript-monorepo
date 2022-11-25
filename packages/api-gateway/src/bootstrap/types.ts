import { LoggerService, LogLevel } from '@nestjs/common'
import { CorsOptions, CorsOptionsDelegate } from '@nestjs/common/interfaces/external/cors-options.interface'
import { FastifyAdapter } from '@nestjs/platform-fastify'

type FastifyAdapterConstructorParam = ConstructorParameters<typeof FastifyAdapter>[0]
type LoggerOption = LoggerService | LogLevel[] | false
type CanEnableCors = {
  enableCors(options?: CorsOptions | CorsOptionsDelegate<any>): void
}

export interface BootstrapParam {
  readonly fastifyOption: FastifyAdapterConstructorParam
  readonly logger?: LoggerOption
  readonly port: number
  enableCors(canCorsEnable: CanEnableCors): void
  onListen(): void
  onListenError(err: any): void
}
