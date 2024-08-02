import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'demo01',
    loadChildren: () =>
      import('./demo1/demo1.module').then((m) => m.Demo1Module),
  },
  { path: 'list_user', component: UserListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
