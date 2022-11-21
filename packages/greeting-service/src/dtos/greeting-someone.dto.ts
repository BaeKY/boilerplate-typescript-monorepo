export class GreetingSomeoneRequest {
  public constructor(args: { readonly name: string }) {
    this.name = args.name
  }

  public readonly name!: string
}
