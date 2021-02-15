import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Users} from '../interfaces/users.interface';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<Users>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.users$ = this.userService.getUsers();
  }
}
