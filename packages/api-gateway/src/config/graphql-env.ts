import { EnvLoader } from './env-loader'

interface IGraphqlConfig {
  graphiql: boolean
  path?: string
}

export const graphqlConfig = EnvLoader.create<IGraphqlConfig>('graphql-env', {
  path: process.env.GRAPHQL_ENDPOINT ?? 'gql',
  graphiql: process.env.GRAPHQL_USE_GRAPHIQL == null || Boolean(process.env.GRAPHQL_USE_GRAPHIQL === 'true')
})
