/* eslint-disable no-unused-vars */
type NodeEnvironment = 'prod' | 'production' | 'dev' | 'development'
type Protocol = 'http2-secure' | 'http-secure' | 'http2' | 'http'

declare namespace NodeJS {
  interface ProcessEnv {
    /** node environment */
    NODE_ENV: NodeEnvironment
    PORT: string
    GRAPHQL_ENDPOINT: string
    USE_GRAPHQL_PLAYGROUND: string
    // 이하 Fastify Option
    PROTOCOL: Protocol
    TLS_KEY_PATH: string
    TLS_CERT_PATH: string
    ALLOW_HTTP1: string
  }
}
