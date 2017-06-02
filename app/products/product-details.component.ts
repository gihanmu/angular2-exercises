import { Component} from '@angular/core';
import { IProduct} from './product';

@Component({
    selector : 'pm-details',
    moduleId : module.id,
    templateUrl : 'product-details.component.html' 
})
export class ProductDetailsComponent {
    pageTitle : string = 'Product Details';
    product : IProduct;
}