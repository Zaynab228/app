import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { confirmSavingFormGuard } from './guards/confirm-saving-form.guard';
import { authGuard } from './guards/auth.guard';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
   {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductsComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'product-details/:id',canActivate:[authGuard],component:ProductsDetailsComponent},
  {path:'shipping-address/:id/:type',canActivate:[authGuard],component:ShippingAddressComponent},

  {path:'category',component:CategoriesComponent},
  {path:'brands',component:BrandsComponent},
    {path:'wish-list',component:WishListComponent},
  {path:'register',canDeactivate:[confirmSavingFormGuard],component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'signout',component:SignOutComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'verifycode',component:VerifyCodeComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
