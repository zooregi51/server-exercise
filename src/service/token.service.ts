import { ITokenService } from "../interface/itoken.service";

export class TokenService implements ITokenService {
    authenticate(token: string): string {
        return "";
    }
    issue(id: string): string {
        return "";
    }
}