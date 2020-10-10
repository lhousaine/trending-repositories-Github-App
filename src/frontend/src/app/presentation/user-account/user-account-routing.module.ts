import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutUserAccountComponent } from '../layout/layout-user-account/layout-user-account.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutUserAccountComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
