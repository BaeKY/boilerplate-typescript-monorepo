import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { configModuleOption, graphqlConfig } from './config'

import resolvers from './resolvers'

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOption),
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      imports: [graphqlConfig.module],
      inject: [graphqlConfig.key],
      useFactory(config: ConfigType<typeof graphqlConfig.env>) {
        const { graphiql, path } = config
        return {
          autoSchemaFile: true,
          buildSchemaOptions: {
            dateScalarMode: 'isoDate'
          },
          path,
          graphiql
        }
      }
    })
  ],
  providers: [...resolvers]
})
export class AppModule {}
