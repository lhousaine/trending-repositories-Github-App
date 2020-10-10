import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { ReposComponent } from './repos/repos.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [ ReposComponent, LanguagesComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ]
})
export class RepositoriesModule { }
