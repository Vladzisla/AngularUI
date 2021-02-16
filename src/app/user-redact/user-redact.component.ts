import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces/user.interface';

@Component({
  selector: 'app-user-redact',
  templateUrl: './user-redact.component.html',
  styleUrls: ['./user-redact.component.css']
})
export class UserRedactComponent implements OnInit {
  id: number;
  user: any;
  registrationForm: FormGroup;
  message$: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getUser();
    this.registrationForm = new FormGroup({
      login: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(''),
      role: new FormControl(''),
      filePath: new FormControl('')
    });
  }

  getUser(): void {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

  onSubmitted(): void {
    const body: any = {};
    if (this.registrationForm.get(['login']).value) { body.login = this.registrationForm.get(['login']).value; }
    if (this.registrationForm.get(['role']).value) {  body.role = this.registrationForm.get(['role']).value; }
    this.message$ = this.userService.updateUser(this.id, body);
    this.message$.subscribe(() => this.userService.getUser(this.id).subscribe(user => this.user = user));
  }
}
