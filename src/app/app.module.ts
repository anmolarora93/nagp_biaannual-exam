import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductServiceService } from './product-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes = [ 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeScreenComponent},
  {path:"products", component: ProductPageComponent},
  {path:"cart", component: CartPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ProductPageComponent,
    CartPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
