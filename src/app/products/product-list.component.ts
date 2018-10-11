import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    selector:'pm-products',

    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    panelTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    _listFilter: string = 'cart';
    products: IProduct[] =[] ;
    showImage: boolean = false;
    filteredProducts: IProduct[];

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value:string) {
       this._listFilter = value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message:string):void{
      this.panelTitle = "Product List: " + message;
    }

    performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().lastIndexOf(filterBy) !== -1);
    }

//
    constructor (private productService: ProductService){

    }

  }
