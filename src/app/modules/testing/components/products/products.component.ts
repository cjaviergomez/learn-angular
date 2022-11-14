import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductsService } from '../../services/product.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products: Product[] = [];
	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.getAllProducts();
	}

	getAllProducts() {
		this.productsService.getAllSimple().subscribe(products => {
			this.products = products;
		});
	}
}
