import { IUserRepository } from "../interface/iuser.repository";

export class UserRepository implements IUserRepository{
    async findById(id: string): Promise<string> {
        return "";
    }
    async save(id: string, pw: string): Promise<void> {
    }
    async login(id: string, pw: string): Promise<string> {
        return "";
    }
}