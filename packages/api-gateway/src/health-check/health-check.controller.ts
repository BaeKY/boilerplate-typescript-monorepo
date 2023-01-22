import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckResult, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus'

@Controller('health')
export class HealthCheckController {
  public constructor(private readonly healthChecker: HealthCheckService, private readonly http: HttpHealthIndicator) {}

  @Get()
  @HealthCheck()
  public async check(): Promise<HealthCheckResult> {
    return this.healthChecker.check([() => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com')])
  }
}
