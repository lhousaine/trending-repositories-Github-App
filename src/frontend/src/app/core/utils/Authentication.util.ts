import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationUtil{
 constructor(private store: Store){}

 isAuthenticated(): boolean{
    return !!this.store.selectSnapshot(
        state => state.currentUser.token
      );
 }
}
