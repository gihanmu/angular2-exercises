import { Component, OnInit } from '@angular/core';
import {IProduct } from './product';
import {ProductService } from './product.service';

@Component({
	selector : 'pm-products',
	moduleId : module.id,
	templateUrl : 'product-list.component.html',
	styleUrls : ['product-list.component.css']
	//using relative path (module.id)
})
export class ProductListComponent implements OnInit{
	
	productTitle : string = 'Product List';
	imageWidth : number = 50;
	imageMargin : number = 2;
	showImage : boolean = false;
	listFilter : string;
	products : IProduct[] ;

	constructor(private _productService : ProductService){

	}

	toggleImages() : void {
		this.showImage = !this.showImage;
	}

	ngOnInit() : void{
		console.log('Getting products');
		this.products = this._productService.getProducts();
	}
 
}