import { DynamicModule, Logger } from '@nestjs/common'
import { ConfigFactory, ConfigFactoryKeyHost, ConfigModule, registerAs } from '@nestjs/config'

export class EnvLoader<T extends object> {
  private readonly _values!: ConfigFactory<T> & ConfigFactoryKeyHost<ReturnType<ConfigFactory<T>>>

  private constructor(_token: string, env: T) {
    this._values = registerAs<T>(_token, (): T => {
      Logger.log(`Env Variables Loaded: "${_token}"`, 'EnvLoader')
      return env
    })
  }

  public static create<V extends object>(token: string, values: V): EnvLoader<V> {
    return new EnvLoader<V>(token, values)
  }

  public get env() {
    return this._values
  }

  public get key() {
    return this.env.KEY
  }

  public get module(): DynamicModule {
    return ConfigModule.forFeature(this._values)
  }
}
