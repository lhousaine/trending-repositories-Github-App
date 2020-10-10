import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule)
  },
  {
    path: 'repositories',
    loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
