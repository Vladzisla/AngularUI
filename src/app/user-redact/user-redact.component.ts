import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces/user.interface';
import {UserFull} from '../interfaces/userFull.interface';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-user-redact',
  templateUrl: './user-redact.component.html',
  styleUrls: ['./user-redact.component.css']
})
export class UserRedactComponent implements OnInit {
  id: number;
  user: UserFull;
  registrationForm: FormGroup;
  message$: any;
  sendDisable = false;

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
    }, {validators: this.checkRole});
    this.registrationForm.statusChanges.subscribe((status) => this.sendDisable = status === 'INVALID');
  }

  checkRole(group: FormGroup): null|{notValidRole: boolean} {
    return (group.get('role').value === 'user'
      || group.get('role').value === 'admin'
      || !group.get('role').value) ? null : { notValidRole: true };
  }
  getUser(): void {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

  onSubmitted(): void {
    const body: any = {};
    if (this.registrationForm.get(['login']).value) { body.login = this.registrationForm.get(['login']).value; }
    if (this.registrationForm.get(['role']).value) {  body.role = this.registrationForm.get(['role']).value; }
    if (JSON.stringify(body) !== '{}'){
      this.message$ = this.userService.updateUser(this.id, body);
      this.message$.subscribe(() => this.userService.getUser(this.id).subscribe(user => this.user = user));
    }
  }
}
