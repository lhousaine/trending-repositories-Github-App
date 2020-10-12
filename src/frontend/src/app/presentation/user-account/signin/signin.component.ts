import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { SignInUser } from 'src/app/core/ngxs-state-management/actions/User.Account.actions';
import { UserAccountStateModel } from 'src/app/core/ngxs-state-management/states/User.Account.state';
import { AuthenticationUtil } from 'src/app/core/utils/Authentication.util';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  submitted = false;
  signInError = '';
  @Select(state => state.user) userInfo: Observable<UserAccountStateModel>;

  signinForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private store: Store,
              private authUtil: AuthenticationUtil,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authUtil.isAuthenticated()) {
      this.router.navigate(['repositories/languages']);
   }
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.signinForm.controls; }

  onSignin(): void{
    this.submitted = true;
    if (this.signinForm.valid) {
      this.store
      .dispatch(new SignInUser(this.signinForm.getRawValue()))
      .pipe(withLatestFrom(this.userInfo))
      .subscribe(([_, userInfo]) => {
        console.log('success Auth' + userInfo);
        this.signInError = '';
        this.router.navigate(['repositories/languages']);
      }, error => {
        this.signInError = 'Your Username Or Password are not valide';
        console.log(error);
        this.router.navigate(['accounts/signin']);
      });
    }else {
      console.log('There is a problem with the form');
    }
  }
}
