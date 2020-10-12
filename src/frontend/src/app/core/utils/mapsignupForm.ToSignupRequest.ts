import { SignUpRequest } from 'src/app/data/models/SignUpRequest';

export function mapSignupFromToSignupRequest(data: any): SignUpRequest{
    return {
        userAccount: {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password
        },
        confirmedPassword: data.confirmedPassword
    };
}
