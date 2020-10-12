import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserAccountModule { }
