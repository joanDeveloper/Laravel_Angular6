import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
  ],

  providers: [
  ]
})
export class CartModule {}
