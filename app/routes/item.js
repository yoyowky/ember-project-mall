import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
    //denamic router, need specify the model based on different id  
    model(params){
        const {
            item_id
        } = params;
        return item_id;
    }
}
