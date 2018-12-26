import {Injectable} from '@angular/core'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Product} from '../../cart/cart.model';


@Injectable()
export class CartService {
    items = [];
    constructor(){}

    addItem(item:Product){
        console.log("CART SERVICE",item);
        if (localStorage.getItem("cart")) {
            let cart_array = [], cart_old = localStorage.getItem("cart");
            cart_array.push(item,...JSON.parse(cart_old));
            JSON.parse(cart_old).map(element =>{
                if (element.slug == item.slug) cart_array.splice(cart_array.indexOf(item), 1);
            });
            localStorage.setItem("cart",JSON.stringify(cart_array));
        }else{
            this.items = [];
            this.items.push(item);
            localStorage.setItem("cart",JSON.stringify(this.items));
        }
    }

    removeItem(Product){
        this.items.splice(this.items.indexOf(Product), 1);
        localStorage.setItem("cart",JSON.stringify(this.items));
    }
    
    total(){
       // var value = "5";
        return this.items.map(item => item.price)
        .reduce((prev, price)=> prev + price, 0)
        
    }

    clearCart(){
        localStorage.removeItem("cart");
        return this.items = [];
    }
    
}