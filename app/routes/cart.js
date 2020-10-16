import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    model(){
        const items = [
            {price:10},
            {price:15}
        ];
        return items;
    }
    // override // also can add these logic in controller directly
    // setupController(controller, model){
    //     super.setupController(controller, model); // inherate
    //     const subtotal = model.reduce((acc, item) => {
    //         return acc + item.price;
    //     }, 0);
    //     controller.set('subtotal', subtotal);
    // }
}
