export interface ITokenService {
    issue(id: string): string;
    authenticate(token: string): string;
}