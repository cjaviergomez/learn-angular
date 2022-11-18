import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { generateManyProducts } from '../../../core/models/product.mock';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './product.service';

describe('ProductsService', () => {
	let productService: ProductsService;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductsService]
		});

		productService = TestBed.inject(ProductsService);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(productService).toBeTruthy();
	});

	describe('Tests for getAllSimple', () => {
		it('should return a product list', doneFn => {
			// Arrange
			const mockProducts: Product[] = generateManyProducts(2);
			// Act
			productService.getAllSimple().subscribe(products => {
				// Assert
				expect(products).toEqual(mockProducts);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products`;
			const req = httpController.expectOne(url);
			req.flush(mockProducts);
			httpController.verify();
		});
	});
});
