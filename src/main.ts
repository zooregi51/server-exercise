import { userInfo } from "os";
import { UserRepository } from "./repository/user.repository";
import { TokenService } from "./service/token.service";
import { UserService } from "./service/user.service";

class Main {
    // const 국룰
    async main(){
        // 회원가입 
        // 1. ID/PW 입력받는다.
        // 2. DB 조회 
        //  2-1. 존재하면 "이미 존재하는 회원입니다."
        //  2-2. 없으면 통과
        // 3. DB에 ID/PW 저장
        // 4. 회원가입 완료시 JWT 발행
        const userRepository = new UserRepository();
        const tokenService = new TokenService();
        const userService = new UserService(userRepository, tokenService);
        await userService.signUp("123", "123");
        await userService.signIn("123", "123");
    }
}