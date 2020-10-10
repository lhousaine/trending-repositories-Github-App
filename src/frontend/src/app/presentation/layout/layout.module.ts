import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutUserAccountComponent } from './layout-user-account/layout-user-account.component';
import { LayoutReposComponent } from './layout-repos/layout-repos.component';

@NgModule({
  declarations: [LayoutUserAccountComponent, LayoutReposComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
