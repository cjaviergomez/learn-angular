import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { generateManyProducts, generateOneProduct } from '../../../core/models/product.mock';
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

	describe('Tests for getAll', () => {
		it('should return a product list', doneFn => {
			// Arrange
			const mockProducts: Product[] = generateManyProducts(2);
			// Act
			productService.getAll().subscribe(products => {
				// Assert
				expect(products.length).toEqual(mockProducts.length);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products`;
			const req = httpController.expectOne(url);
			req.flush(mockProducts);
			httpController.verify();
		});

		it('should return a product list with taxes', doneFn => {
			// Arrange
			const mockProducts: Product[] = [
				{
					...generateOneProduct(),
					price: 100
				},
				{
					...generateOneProduct(),
					price: 200
				},
				{
					...generateOneProduct(),
					price: 0
				},
				{
					...generateOneProduct(),
					price: -100
				}
			];

			// Act
			productService.getAll().subscribe(products => {
				// Assert
				expect(products[0].taxes).toEqual(19);
				expect(products[1].taxes).toEqual(38);
				expect(products[2].taxes).toEqual(0);
				expect(products[3].taxes).toEqual(0);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products`;
			const req = httpController.expectOne(url);
			req.flush(mockProducts);
			httpController.verify();
		});
		it('should send query params with limit 10 and offset 3', doneFn => {
			// Arrange
			const mockProducts: Product[] = generateManyProducts(2);
			const limit = 10;
			const offset = 3;
			// Act
			productService.getAll(limit, offset).subscribe(products => {
				// Assert
				expect(products.length).toEqual(mockProducts.length);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products?limit=${limit}&offset=${offset}`;
			const req = httpController.expectOne(url);
			req.flush(mockProducts);
			const params = req.request.params;
			expect(params.get('limit')).toEqual(`${limit}`);
			expect(params.get('offset')).toEqual(`${offset}`);
			httpController.verify();
		});
	});
});
