import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: 'userRegister', component: UserRegisterComponent },
  {path: 'logon',component:LoginComponentComponent},
  { path: '',   redirectTo: '/logon', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
