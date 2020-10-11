import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { UserAccountModule } from './user-account/user-account.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    RepositoriesModule,
    UserAccountModule,
    LayoutModule
  ]
})
export class PresentationModule { }
