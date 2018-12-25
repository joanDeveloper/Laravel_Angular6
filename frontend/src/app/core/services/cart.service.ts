import {Injectable} from '@angular/core'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Product} from '../../cart/cart.model';


@Injectable()
export class CartService {
    constructor(){}

    items: Product[] = []
    addItem(item:Product){
        console.log("CART SERVICE",item);
        this.items.push(item);
        localStorage.setItem("cart",JSON.stringify(this.items));
    }

    removeItem(Product){
        this.items.splice(this.items.indexOf(Product), 1)
        localStorage.setItem("cart",JSON.stringify(this.items));  
    }
    
    total() :number{
        return this.items
        .map(item => item.price.value)
        .reduce((prev, value)=> prev+value, 0)
    }
    totalIns():number{
         return this.items
        .map(item => item.price.installmentValue)
        .reduce((prev, value)=> prev+value, 0)   
    }
    installment():number{
        return Math.max.apply(
            Math,this.items
            .map(function(prod){
            return prod.price.installments;
        }))
    }
    
}