import 'reflect-metadata'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'
import { IS_PRODUCTION_ENV } from './config'
import { bootstrap } from './bootstrap'
import { bootstrapParamDev } from './bootstrap/dev-param'
import { bootstrapParamProd } from './bootstrap/prod-param'

const logger = new Logger('Bootstrap')

bootstrap(AppModule, IS_PRODUCTION_ENV ? bootstrapParamProd : bootstrapParamDev)
  .then(() => logger.log('Server Started Successfully'))
  .catch((err) => {
    logger.error(err)
  })
  .finally(() => {
    if (!IS_PRODUCTION_ENV) {
      logger.debug(`Application running on '${process.env.NODE_ENV}' environment`)
    }
  })
