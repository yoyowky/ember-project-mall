import Controller from '@ember/controller';
import { inject as servise } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
    @servise shoppingCart;
    // @servise('shopping-cart') cart; // cart is a customise name 

    get subtotal(){
        return this.shoppingCart.itemList.reduce((acc, item) => {
            return acc + item.price * item.count;
            }, 0);
    }
    get tax(){
        return 0.09*this.subtotal;
    }
    get total(){
        return this.subtotal + this.tax;
    }

    @action
    updateItemCount(item, event){   // item是传进来的参数， event是action
        const count = event.target.value; //input框里的数字
        if(count>=0){
            item.count = count;
        } else {
            item.count = 0;
        } 
    }
}
