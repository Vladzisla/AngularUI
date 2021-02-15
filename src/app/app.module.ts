import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersComponent} from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserRedactComponent} from './user-redact/user-redact.component';
import {UserCreateComponent} from './user-create/user-create.component';

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/:id', component: UserRedactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserRedactComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
