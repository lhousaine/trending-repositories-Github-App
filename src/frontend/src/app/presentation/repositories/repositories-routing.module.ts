import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LayoutReposComponent } from '../layout/layout-repos/layout-repos.component';
import { LanguagesComponent } from './languages/languages.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutReposComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'languages', component: LanguagesComponent },
      { path: 'repos', component: ReposComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
