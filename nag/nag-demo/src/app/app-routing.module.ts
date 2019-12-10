import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

// Application Routes
const routes: Routes = [
  // Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Users
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  // Selected User
  { path: 'users/:id', component: EditUserComponent },
  // Others => redirect to home
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
