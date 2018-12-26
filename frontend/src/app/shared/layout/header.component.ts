import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService, CartService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private cartService: CartService,
    private router: Router,
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        console.log("currentUserHEADER",userData);
        this.currentUser = userData;
      }
    );

    console.log("hEADER cart",this.cartService.totalProd());
  }

  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  totalProd(){
    return this.cartService.totalProd();
  }

}
