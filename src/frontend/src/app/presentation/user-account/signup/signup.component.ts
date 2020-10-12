import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/core/utils/Password.Helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

  get f() { return this.signupForm.controls; }

  onSignup(): void{
    this.submitted = true;
    if (this.signupForm.valid) {
      console.log(this.signupForm.getRawValue());

    }else {
      console.log('There is a problem with the form');
    }
  }

}
