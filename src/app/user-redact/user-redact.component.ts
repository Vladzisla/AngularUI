import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-redact',
  templateUrl: './user-redact.component.html',
  styleUrls: ['./user-redact.component.css']
})
export class UserRedactComponent implements OnInit {
  id: number;
  user: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }
}
