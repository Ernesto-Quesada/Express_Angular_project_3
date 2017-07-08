import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserprofileComponent } from './userprofile/userprofile.component';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: UserprofileComponent },

  // { path: 'phone/:id', component: PhoneDetailsComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
