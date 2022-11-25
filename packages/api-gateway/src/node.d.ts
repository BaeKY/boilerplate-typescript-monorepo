type NodeEnvironment = 'prod' | 'production' | 'dev' | 'development'

declare namespace NodeJS {
  interface ProcessEnv {
    /** node environment */
    NODE_ENV: NodeEnvironment
    PORT: string
    GRAPHQL_ENDPOINT: string
    GRAPHQL_USE_GRAPHIQL: string
    TLS_KEY_PATH: string
    TLS_CERT_PATH: string
  }
}
