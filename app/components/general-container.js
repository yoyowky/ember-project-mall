import Component from '@glimmer/component';
import { inject as servise } from '@ember/service';

export default class GeneralContainerComponent extends Component {
    @servise shoppingCart;
}
