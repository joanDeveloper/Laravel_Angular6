import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Article, DevicesService, UserService, CartService } from '../core';
import { catchError } from 'rxjs/operators/catchError';
import { from } from 'zen-observable';

@Injectable()
export class CartResolver {
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    return this.cartService.totalIns();

  }
}
