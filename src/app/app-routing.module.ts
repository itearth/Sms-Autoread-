import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileNumberLoginPage } from '../app/mobile-number-login/mobile-number-login.page'; // Update the path accordingly

const routes: Routes = [
  {
    path: '',
    component: MobileNumberLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
