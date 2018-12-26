import { Component, OnInit } from '@angular/core';
import { Product } from './cart.model';
import { CartService } from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'
import { UserService, User } from '../../../src/app/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser: User;
  test: string;
  constructor(
    private cartService: CartService,
    private userService: UserService
  ) { }

  ngOnInit() {
    let cartSession = localStorage.getItem("cart");
    if (cartSession != null) {
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }
  removeItem(Product) {
    console.log("REMOVEITEM", Product);
    let cart = this.cartService;
    swal({
      title: 'Confirmar',
      text: "Desea eliminar " + Product.brand + " con un precio de " + Product.price + "€ del carrito?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then(function (e) {
      if (e.value == true) {
        swal(
          'Eliminado!',
          'Producto eliminado satisfactoriamente',
          'success'
        )
        return cart.removeItem(Product);
      }
    });
  }

  total() {
    return this.cartService.total();
  }

  clearCart() {
    let cart = this.cartService;
    swal({
      title: 'Confirmar',
      text: "Desea vaciar el carrito?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then(function (e) {
      if (e.value == true) {
        swal(
          'Productos fuera!',
          'Carrito vaciado satisfactoriamente',
          'success'
        )
        return cart.clearCart();
      }
    });

  }

  buyCart() {
    this.userService.currentUser.subscribe(
      (userData) => {
        console.log("currentUserCART", userData);
        this.currentUser = userData;
      }
    );

    let priceCart = this.cartService.total();
    let deviceCart = this.cartService.getCart();
    let dataCart = {
      id: this.currentUser.id,
      price: priceCart,
      device: deviceCart
    };

    this.cartService.sendCart(dataCart).subscribe(
      data => { console.log("res SCART:", data); },
      err => { console.log("Error cart", err); }
    );
  }

  cuantity(value, product) {
    var array1 = [];
    var array2 = [];
    /*console.log("prod cart",product);
    console.log("event cart",value.target);
    console.log("cuantity cart",value.target.value);*/
    if (value.target.value > 1) {
      array1.push(product.price);
      array2.push(value.target.value);

      array1.map(function(x) {
        console.log("MAP1",x);
        array2.map(function(f) {
          console.log("MAP2",f);
          console.log("TOTALMAP2",x*f);
        });
      });

      let total = this.cartService.total() + (parseFloat(product.price) * value.target.value) - parseFloat(product.price);
      console.log("TOTAL", total);

      localStorage.setItem("subTotalCart", JSON.stringify(total));
      this.test = localStorage.getItem("subTotalCart");
      console.log("SUB", this.test);
      return this.test;


    }

  }
}

