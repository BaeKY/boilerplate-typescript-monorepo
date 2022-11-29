import { ConfigModuleOptions } from '@nestjs/config'
import Joi from 'joi'
import path from 'path'

const withProjectRootPath = (...envFiles: string[]): string[] =>
  envFiles.map((filename) => path.resolve(process.cwd(), filename))

const IS_PRODUCTION_ENV = process.env.NODE_ENV != null ? ['prod', 'production'].includes(process.env.NODE_ENV) : false

const configModuleOption: ConfigModuleOptions = {
  ignoreEnvFile: IS_PRODUCTION_ENV,
  envFilePath: withProjectRootPath('.env.dev', '.env.test'),
  validationSchema: Joi.object<NodeJS.ProcessEnv>({
    NODE_ENV: Joi.string().valid('prod', 'dev', 'production', 'development', 'test'),
    GRAPHQL_ENDPOINT: Joi.string().min(1).max(12).lowercase().optional(),
    USE_GRAPHQL_PLAYGROUND: Joi.boolean().default(false).optional(),
    PORT: Joi.number().port().optional(),
    TLS_KEY_PATH: Joi.string().optional(),
    TLS_CERT_PATH: Joi.string().optional(),
    PROTOCOL: Joi.string().valid('http2-secure', 'http-secure', 'http2', 'http').default('http').optional()
  }),
  validationOptions: {
    abortEarly: false,
    presence: 'required'
  }
}

export { IS_PRODUCTION_ENV, configModuleOption }
