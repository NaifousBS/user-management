import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userSubscription: Subscription;
  user: User = new User();

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }

  addUser(user: User) {
    this.userSubscription = this.userService.createUser(user)
      .subscribe(
        (data: User) => this.router.navigate(['/users']),
        (err) => console.log(err),
      );
  }

  ngOnDestroy() {
    if (this.userSubscription) { this.userSubscription.unsubscribe(); }
  }
}
