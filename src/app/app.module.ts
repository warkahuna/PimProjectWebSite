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
import { ForgetPasswordAppComponent } from './forget-password-app/forget-password-app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { NewSubscriptionComponent } from './components/new-subscription/new-subscription.component';
import { ChatQuestionsComponent } from './components/chat-questions/chat-questions.component';
import { NgxPrettyDateModule } from 'ngx-pretty-date';
import { ConstantsService } from './constants.service';
import { AppSettings } from './app.settings';
import { MejdaService } from './Services/mejda.service';
import { FileUploadService } from './Services/file-upload.service';
import { BlogService } from './Services/blog.service';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDialogComponent } from './components/products-list/product-dialog/product-dialog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CompareComponent } from './components/compare/compare.component';
import { CartComponent } from './components/cart/cart.component';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CompareComponent,
    WishlistComponent,
    CheckoutComponent,
    ProductDialogComponent,
    ProductsListComponent,
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
    BlogComponent,
    EditBlogComponent,
    ChatBotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrettyDateModule,
    SharedModule,
    ChatModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar:true,
      progressAnimation:"increasing",
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }) // ToastrModule added
  ],
  providers: [UserService,ConstantsService,AppSettings, MejdaService, FileUploadService, BlogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
