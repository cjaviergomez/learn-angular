import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './product.service';

describe('ProductsService', () => {
	let productService: ProductsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductsService]
		});

		productService = TestBed.inject(ProductsService);
	});

	it('should be created', () => {
		expect(productService).toBeTruthy();
	});
});
