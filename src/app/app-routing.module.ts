import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { NewSubscriptionComponent } from './components/new-subscription/new-subscription.component';
import { ChatQuestionsComponent } from './components/chat-questions/chat-questions.component';
import { ForgetPasswordAppComponent } from './forget-password-app/forget-password-app.component';


const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:key',component:ResetPasswordComponent},
  {path:'mySubscriptions',component:MySubscriptionsComponent},
  {path:'newSubscriptions',component:NewSubscriptionComponent},
  {path:'chatQuestions',component:ChatQuestionsComponent},
  {path:'forgotPasswordApp',component:ForgetPasswordAppComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
