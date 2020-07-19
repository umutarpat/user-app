import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './module/components/user-list/user-list.component';
import { AddListComponent } from './module/components/add-list/add-list.component';
import { EditListComponent } from './module/components/edit-list/edit-list.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/userlist',
    pathMatch: 'full',


  },
  {
    path: 'userlist',
    component: UserListComponent,


  },

  {
    path: 'add',
    component: AddListComponent,

  },
  {
    path: 'edit/:id',
    component: EditListComponent,

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
