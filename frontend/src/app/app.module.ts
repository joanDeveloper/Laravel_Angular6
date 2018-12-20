import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,SociaLoginComponent
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
  "google": {
    "clientId": "182576342220-mud060hgmvvspd7ls0gqfj359r6fk2hm.apps.googleusercontent.com"
  }
};

// Apollo
import { GraphQLModule } from "./graphql.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ContactModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}

Angular2SocialLoginModule.loadProvidersScripts(providers);
