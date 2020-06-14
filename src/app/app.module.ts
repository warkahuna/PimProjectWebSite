import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { NewSubscriptionComponent } from './components/new-subscription/new-subscription.component';
import { ChatQuestionsComponent } from './components/chat-questions/chat-questions.component';
import { NgxPrettyDateModule } from 'ngx-pretty-date';
import { ConstantsService } from './constants.service';
import { ForgetPasswordAppComponent } from './forget-password-app/forget-password-app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    ResetPasswordComponent,
    MySubscriptionsComponent,
    NewSubscriptionComponent,
    ChatQuestionsComponent,
    ForgetPasswordAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrettyDateModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar:true,
      progressAnimation:"increasing",
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }) // ToastrModule added
  ],
  providers: [UserService,ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
