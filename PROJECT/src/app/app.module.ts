import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
