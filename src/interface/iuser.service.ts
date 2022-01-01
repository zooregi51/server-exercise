export interface IUserService{
    signUp(id: string, pw: string): Promise<string>;
    signIn(id: string, pw: string): Promise<string>;
}