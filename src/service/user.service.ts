import { ITokenService } from "../interface/itoken.service";
import { IUserRepository } from "../interface/iuser.repository";
import { IUserService } from "../interface/iuser.service";
import { UserRepository } from "../repository/user.repository";
import { TokenService } from "./token.service";

export class UserService implements IUserService {

    constructor(
        private userRepository: IUserRepository,
        private tokenService: ITokenService,
    ){}

    async signUp(id: string, pw: string): Promise<string> {
        const userId = await this.userRepository.findById(id);
        // 2-1
        if (!userId) {
            throw new Error("이미 존재하는 회원입니다.");
        }
        await this.userRepository.save(id,pw);
        return this.tokenService.issue(id);
    }

    async signIn(id: string, pw: string): Promise<string> {
        // 1. id/pw 입력받기
        // 2. id/pw db 조회하기
        //  2.1 db 조회값이 입력값과 일치하면 로그인 성공
        //  2.2 id값이 아에 없을 경우 "존재하지 않는 사용자입니다." 에러 표시
        //  2.3 일치하지 않으면 id/ pw가 일치하지 않습니다. 에러 표시
        // 3. 로그인 완료시 JWT 발행
        const userPW = await this.userRepository.findById(id);

        if (!userPW){
            throw new Error("존재하지 않는 사용자입니다.");
        }  
        if (pw !== userPW) {
            throw new Error ("ID 또는 PW가 일치하지 않습니다.");
        }

        return this.tokenService.issue(id);
    }
 }