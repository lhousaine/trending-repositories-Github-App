import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationUtil } from 'src/app/core/utils/Authentication.util';
import { mapSignupFromToSignupRequest } from 'src/app/core/utils/mapsignupForm.ToSignupRequest';
import { MustMatch } from 'src/app/core/utils/Password.Helper';
import { SignUpRequest } from 'src/app/data/models/SignUpRequest';
import { UserAccountService } from 'src/app/data/services/user-account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted = false;
  signUpError = '';
  signupForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private userAccountService: UserAccountService,
              private authUtil: AuthenticationUtil,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authUtil.isAuthenticated()) {
      this.router.navigate(['repositories/languages']);
    }
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmedPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmedPassword')
  });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.signupForm.controls; }

  onSignup(): void{
    this.submitted = true;
    if (this.signupForm.valid) {
      const test: SignUpRequest = mapSignupFromToSignupRequest(this.signupForm.getRawValue());
      this.userAccountService.signUp(test)
      .subscribe((result) => {
        console.log('success Auth' + result);
        this.signUpError = '';
        this.router.navigate(['accounts/signin']);
      }, error => {
        console.log(error);
        this.signUpError = error.error;
      });
    }else {
      console.log('There is a problem with the form');
    }
  }

}
