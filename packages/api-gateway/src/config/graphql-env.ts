import { EnvLoader } from './env-loader'

interface IGraphqlConfig {
  graphiql: boolean
  path?: string
}

export const graphqlConfig = EnvLoader.create<IGraphqlConfig>('graphql-env', {
  path: process.env.GRAPHQL_ENDPOINT ?? 'gql',
  graphiql: process.env.USE_GRAPHQL_PLAYGROUND == null || Boolean(process.env.USE_GRAPHQL_PLAYGROUND === 'true')
})
