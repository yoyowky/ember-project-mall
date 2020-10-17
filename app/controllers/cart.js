import Controller from '@ember/controller';
import { inject as servise } from '@ember/service';

export default class CartController extends Controller {
    @servise shoppingCart;
    // @servise('shopping-cart') cart; // cart is a customise name 

    get subtotal(){
        return this.model.reduce((acc, item) => {
            return acc + item.price;
            }, 0);
    }
    get tax(){
        return 0.09*this.subtotal;
    }
    get total(){
        return this.subtotal + this.tax;
    }
}
