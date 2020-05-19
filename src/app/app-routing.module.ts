import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { CartComponent } from './components/cart/cart.component';
import { CompareComponent } from './components/compare/compare.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';




import { ChatBotComponent } from './components/chat-bot/chat-bot.component';




const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:key',component:ResetPasswordComponent},
  {path:'cart',component:CartComponent},
  {path:'compare',component:CompareComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'products-list',component:ProductsListComponent},
  {path:'wishList',component:WishlistComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'chat-bot',component:ChatBotComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
