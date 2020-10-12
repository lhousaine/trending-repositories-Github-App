import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserAccount } from 'src/app/data/models/UserAccount';
import { UserAccountService } from 'src/app/data/services/user-account.service';
import { SignInUser, SignOutUser, SignUpUser } from '../actions/User.Account.actions';

export class UserAccountStateModel {
  token?: string;
  username?: string;
}
const defaults: UserAccountStateModel = {
  token: null,
  username: null
};

@State<UserAccountStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserAccountState {

  constructor(private userAccountService: UserAccountService) {}

  @Selector()
  getCurrentUser(state: UserAccountStateModel): string{
      return state.username;
  }

  @Selector()
  token(state: UserAccountStateModel): string {
     return state.token;
  }

  @Selector()
  userInfo(state: UserAccountStateModel): UserAccountStateModel {
     return state;
  }

    @Action(SignInUser)
    signIn(
      { patchState }: StateContext<UserAccountStateModel>,
      { payload }: SignInUser
    ): Observable<string> {
      return this.userAccountService.signIn(payload).pipe(
        tap((result: string) => {
          patchState({
            token: result,
            username: payload.username
          });
        })
      );
    }

    @Action(SignUpUser)
    signUp(
      { payload }: SignUpUser
    ): Observable<UserAccount> {
      return this.userAccountService.signUp(payload);
    }

    @Action(SignOutUser)
    signOut({setState}: StateContext<UserAccountStateModel>): Observable<string> {
      return this.userAccountService.SignOut().pipe(
        tap(_ => {
          setState({...defaults});
    }));
  }

}
