import { UserAccount } from './UserAccount';

export interface SignUpRequest {
    userAccount: UserAccount;
    confirmedPassword: string;
}
