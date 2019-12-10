import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

  // Properties
  user: User = {};
  usersSubscription: Subscription;
  routeSubscription: Subscription;
  loading = false;
  activeUser = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  // On component init
  ngOnInit() {
    this.getUserById();
  }

  // Get user selected user by id
  getUserById() {

    let userId = null;
    this.loading = true;
    // Get selected user from id in URL
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      userId = params.id;
    });

    // Get user from DB through service
    this.usersSubscription = this.userService.getUser(userId)
      .subscribe(
        (data: User) => {
          this.user = data;
          this.loading = false;
        },
        (err) => {
          this.user = {};
          this.loading = false;
          console.log(err);
        });
  }

  // Edit selected user
  editUser(user: User) {
    this.usersSubscription = this.userService.editUser(user.id, user)
      .subscribe(
        (data: User) => this.router.navigate(['/users']),
        (err) => console.log(err),
      );
  }

  // On component destroy
  ngOnDestroy() {
    if (this.routeSubscription) { this.routeSubscription.unsubscribe(); }
    if (this.usersSubscription) { this.usersSubscription.unsubscribe(); }
  }
}