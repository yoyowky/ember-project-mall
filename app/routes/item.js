import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class ItemRoute extends Route {
    //denamic router, need specify the model based on different id  
    model(params){
        const {
            item_id
        } = params;
        const product = products.find(({id}) => id === item_id);
        return product;
    }
}
