import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsComponent } from './components/products/products.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ProductComponent } from './components/product/product.component';
import { SliceTitlePipe } from './pipes/slice-title.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { CategoryPipe } from './services/category.pipe';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerifyCodeComponent,
    SignUpComponent,
    ProductsComponent,
    SignOutComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProductsDetailsComponent,
    CategoriesComponent,
    CartComponent,
    BrandsComponent,
    MainSliderComponent,
    CategorySliderComponent,
    ShippingAddressComponent,
    AllordersComponent,
    ProductComponent,
    SliceTitlePipe,
    SearchProductPipe,
    CategoryPipe,
    WishListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this

  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
