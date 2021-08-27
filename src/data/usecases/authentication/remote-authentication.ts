import { HttpStatusCode, HttpPostClient } from "@/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors";
import { AuthenticationParams, Authentication } from "@/domain/usecases";
import { AccountModel } from "@/domain/models";

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}    

    async auth(params: AuthenticationParams):Promise<AccountModel> {
      const httpResponse = await this.HttpPostClient.post({
        url: this.url,
        body: params
      })
      
      switch (httpResponse.statusCode) {
        case HttpStatusCode.ok: return httpResponse.body
        case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
        default: throw new UnexpectedError()
      }
    }  
}
