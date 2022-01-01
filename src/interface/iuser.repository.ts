export interface IUserRepository{
    save(id: string, pw: string): Promise<void>;
    findById(id: string): Promise<string>;
}