import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from './cart.model';
import {CartService} from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    let cartSession = localStorage.getItem("cart");
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }
  removeItem(Product){
    console.log("REMOVEITEM",Product);
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
      if(e.value==true){
        swal(
          'Eliminado!',
          'Producto eliminado satisfactoriamente',
          'success'
        )
        return cart.removeItem(Product);
      }
    });
  }

  total(){
    return this.cartService.total();
  }

  clearCart(){
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
      if(e.value==true){
        swal(
          'Productos fuera!',
          'Carrito vaciado satisfactoriamente',
          'success'
        )
        return cart.clearCart();
      }
    });
    
  }
}

