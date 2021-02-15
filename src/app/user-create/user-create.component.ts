import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../interfaces/user.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  registrationForm: FormGroup;
  message$: Observable<any>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(''),
      passwordRep: new FormControl('')
    });
  }
  onSubmitted(): void{
    const body: User = {
      login: this.registrationForm.get(['login']).value,
      password: this.registrationForm.get(['password']).value,
      repeat_password: this.registrationForm.get(['passwordRep']).value
    };
    this.message$ = this.userService.createUser(body);
  }
}
