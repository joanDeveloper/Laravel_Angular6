import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
// { ArticleCommentComponent } from './article-comment.component';
import { CartResolver } from './cart-resolver.component';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { CartRoutingModule } from './cart-routing.module';
import { CartService } from '../core/services/cart.service';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    //ArticleCommentComponent,
    MarkdownPipe
  ],

  providers: [
    CartService
    //CartResolver
  ]
})
export class CartModule {}
