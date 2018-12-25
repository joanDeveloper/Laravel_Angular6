import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from './cart.model';
import {CartService} from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'
import {default as NProgress} from 'nprogress'
console.log("CART1");
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log("CART");
    //sessionStorage.removeItem("cart")
    let cartSession = localStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }
  removeItem(Product){
    let c = this.cartService
    swal({
      title: 'Confirmação',
      text: "Você tem certeza que deseja remover este item do carrinho?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then(function () {
      NProgress.start()
      swal(
      'Excluído!',
      'Item excluído do carrinho.',
      'success'
      )
      NProgress.done()
      return c.removeItem(Product)

    })


  }

  total() :number{
    return this.cartService.total()
  }

  totalIns() :number{
    return this.cartService.totalIns()
  }

  installments(){
    return this.cartService.installment()
  }

}

