import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignOutUser } from 'src/app/core/ngxs-state-management/actions/User.Account.actions';
import { AuthenticationUtil } from 'src/app/core/utils/Authentication.util';

@Component({
  selector: 'app-layout-repos',
  templateUrl: './layout-repos.component.html',
  styleUrls: ['./layout-repos.component.scss']
})
export class LayoutReposComponent implements OnInit {

  constructor(private router: Router, private authUtil: AuthenticationUtil, private store: Store) { }
  ngOnInit(): void {
  }

  isAuthenticated(): any{
    return this.authUtil.isAuthenticated();
  }

  signOut(): void {
    this.store.dispatch(new SignOutUser())
    .subscribe(success => {
      console.log('successfull Signout');
    }, error => {
      console.log(error);
    });
    this.router.navigate(['']);
  }
}
