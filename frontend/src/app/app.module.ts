import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*My modules */
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';

/*Routing*/
import { AppRoutingModule } from './app-routing.module';


/* environment */
import { environment } from "../environments/environment";


/* shared */
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,SociaLoginComponent
} from './shared';
import { ToastrModule } from 'ng6-toastr-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Angular2SocialLoginModule } from "angular2-social-login";


/*  ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from "./store/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { effectsArray } from "./store/effects";

let providers = {
  "google": {
    "clientId": "182576342220-mud060hgmvvspd7ls0gqfj359r6fk2hm.apps.googleusercontent.com"
  }
};
console.warn("effectsArray", effectsArray);
console.warn("appReducers", appReducers);
@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    Angular2SocialLoginModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ContactModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

Angular2SocialLoginModule.loadProvidersScripts(providers);
