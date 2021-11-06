import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTableComponent } from './component/user-table/user-table.component';
import { UserFormComponent } from './component/user-form/user-form.component';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserTableComponent
  },
  {
    path: 'users/add',
    component: UserFormComponent
  },
  {
    path: 'users/update/:id',
    component: UserFormComponent
  },
  {
    path: 'users/update/:control',
    component: UserTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
