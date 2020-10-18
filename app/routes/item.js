import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
    @service store;

    //denamic router, need specify the model based on different id  
    async model(params){
        const {
            item_id
        } = params;
        // const response = await fetch('/api/items.json');
        // const { data } = await response.json('product);
        const data = await this.store.findAll('product');
        const product = data.find(({id}) => id === item_id);
        return product;
    } 

    setupController(controller, model){
        super.setupController(controller, model);
        controller.color = model.colors[0].color;
    }
}
