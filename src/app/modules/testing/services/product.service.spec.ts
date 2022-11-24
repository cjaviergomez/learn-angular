import { HttpStatusCode, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { generateManyProducts, generateOneProduct } from '../../../core/models/product.mock';
import { CreateProductDTO, Product, UpdateProductDTO } from '../../../core/models/product.model';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { ProductsService } from './product.service';
import { TokenService } from './token.service';

describe('ProductsService', () => {
	let productService: ProductsService;
	let httpController: HttpTestingController;
	let tokenService: TokenService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				ProductsService,
				TokenService,
				{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
			]
		});

		productService = TestBed.inject(ProductsService);
		httpController = TestBed.inject(HttpTestingController);
		tokenService = TestBed.inject(TokenService);
	});

	afterEach(() => {
		httpController.verify();
	});

	it('should be created', () => {
		expect(productService).toBeTruthy();
	});

	describe('Tests for getAllSimple', () => {
		it('should return a product list', doneFn => {
			// Arrange
			const mockProducts: Product[] = generateManyProducts(2);
			spyOn(tokenService, 'getToken').and.returnValue('token');
			// Act
			productService.getAllSimple().subscribe(products => {
				// Assert
				expect(products).toEqual(mockProducts);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products`;
			const req = httpController.expectOne(url);
			expect(req.request.headers.get('Authorization')).toEqual('Bearer token');
			req.flush(mockProducts);
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
		});
	});

	describe('Tests for create', () => {
		it('should return a product', doneFn => {
			// Arrange
			const mockProduct: Product = generateOneProduct();
			const dto: CreateProductDTO = {
				title: mockProduct.title,
				price: mockProduct.price,
				images: mockProduct.images,
				description: mockProduct.description,
				categoryId: 12
			};
			// Act
			productService.create({ ...dto }).subscribe(product => {
				// Assert
				expect(product).toEqual(mockProduct);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products`;
			const req = httpController.expectOne(url);
			req.flush(mockProduct);
			expect(req.request.method).toEqual('POST');
			expect(req.request.body).toEqual(dto);
		});
	});

	describe('Tests for update', () => {
		it('should return a product', doneFn => {
			// Arrange
			const mockProduct: Product = generateOneProduct();
			const dto: UpdateProductDTO = {
				title: mockProduct.title,
				price: mockProduct.price,
				images: mockProduct.images,
				description: mockProduct.description,
				categoryId: 12
			};
			// Act
			productService.update(mockProduct.id, { ...dto }).subscribe(product => {
				// Assert
				expect(product).toEqual(mockProduct);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products/${mockProduct.id}`;
			const req = httpController.expectOne(url);
			req.flush(mockProduct);
			expect(req.request.method).toEqual('PUT');
			expect(req.request.body).toEqual(dto);
		});
	});

	describe('Tests for delete', () => {
		it('should return a boolean', doneFn => {
			// Arrange
			const mockBoolean = true;
			const mockId = 1;
			// Act
			productService.delete(`${mockId}`).subscribe(bool => {
				// Assert
				expect(bool).toEqual(mockBoolean);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products/${mockId}`;
			const req = httpController.expectOne(url);
			expect(req.request.method).toEqual('DELETE');
			req.flush(mockBoolean);
		});
	});

	describe('Tests for getOne', () => {
		it('should return a product', doneFn => {
			// Arrange
			const mockProduct: Product = generateOneProduct();
			// Act
			productService.getOne(mockProduct.id).subscribe(product => {
				// Assert
				expect(product).toEqual(mockProduct);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products/${mockProduct.id}`;
			const req = httpController.expectOne(url);
			req.flush(mockProduct);
			expect(req.request.method).toEqual('GET');
		});

		it('should return right message when status code is 404', doneFn => {
			// Arrange
			const id = '1';
			const msgError = '404 - Not Found';
			const mockError = {
				status: HttpStatusCode.NotFound,
				statusText: msgError
			};
			// Act
			productService.getOne(id).subscribe({
				error: error => {
					// Assert
					expect(error).toEqual('El producto no existe');
					doneFn();
				}
			});

			// http config
			const url = `${environment.API_URL}/api/v1/products/${id}`;
			const req = httpController.expectOne(url);
			req.flush(msgError, mockError);
			expect(req.request.method).toEqual('GET');
		});
	});
});
