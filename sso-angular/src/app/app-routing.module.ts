import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: LoginPageComponent},
  {path: 'sign', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
