import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard' , pathMatch: 'full'},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Users' , component: UserListComponent},
  { path: 'Users/:id/:mode' , component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
