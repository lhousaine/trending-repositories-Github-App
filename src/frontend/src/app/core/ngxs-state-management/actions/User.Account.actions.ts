import { SignInRequest } from 'src/app/data/models/LoginRequest';
import { SignUpRequest } from 'src/app/data/models/SignUpRequest';

export class SignInUser {
    static readonly type = '[Auth-Service] SignIn';

    constructor(public payload: SignInRequest ) {
    }

}

export class SignOutUser {
    static readonly type = '[Frontend] SignOut';
}
