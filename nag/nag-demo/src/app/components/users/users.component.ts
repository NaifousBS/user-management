import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  // Properties
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'email', 'age', 'active', 'actions'];
  dataSource: MatTableDataSource<User[]> = null;
  usersSubscription: Subscription;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private userService: UsersService) { }

  // On component init
  ngOnInit() {
    this.getUsers();
  }

  // Get users into component
  getUsers() {
    this.usersSubscription = this.userService.getUsers()
      .subscribe((data: User[]) => {
        this.dataSource = new MatTableDataSource(<any>data);
        this.dataSource.sort = this.sort;
      });
  }

  // Delete user
  deleteUser(id: number) {
    this.usersSubscription = this.userService.deleteUser(id)
      .subscribe(
        (data: User) => this.getUsers(),
        (error) => this.getUsers(),
      );
  }

  // Disable user
  disableUser(user: User) {
    user.active = !user.active;
    this.usersSubscription = this.userService.editUser(user.id, user)
      .subscribe(
        (data: User) => this.getUsers(),
        (err) => this.getUsers(),
      );
  }

  // Filter on the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // On component destroy
  ngOnDestroy() {
    if (this.usersSubscription) { this.usersSubscription.unsubscribe(); }
  }
}
