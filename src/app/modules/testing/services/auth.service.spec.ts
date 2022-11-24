import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { Auth } from '../../../core/models';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

fdescribe('AuthService', () => {
	let authService: AuthService;
	let httpController: HttpTestingController;
	let tokenService: TokenService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [AuthService, TokenService]
		});

		authService = TestBed.inject(AuthService);
		httpController = TestBed.inject(HttpTestingController);
		tokenService = TestBed.inject(TokenService);
	});

	afterEach(() => {
		httpController.verify();
	});

	it('should be created', () => {
		expect(authService).toBeTruthy();
	});

	describe('Tests for login', () => {
		it('should return a token', doneFn => {
			// Arrange
			const mockData: Auth = {
				access_token: '1234567890'
			};
			const mockCredentials = {
				email: 'user@gmail.com',
				password: '12345678'
			};
			// Act
			authService.login(mockCredentials.email, mockCredentials.password).subscribe(data => {
				// Assert
				expect(data).toEqual(mockData);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/auth/login`;
			const req = httpController.expectOne(url);
			req.flush(mockData);
		});

		it('should call a saveToken', doneFn => {
			// Arrange
			const mockData: Auth = {
				access_token: '1234567890'
			};
			const mockCredentials = {
				email: 'user@gmail.com',
				password: '12345678'
			};
			spyOn(tokenService, 'saveToken').and.callThrough();
			// Act
			authService.login(mockCredentials.email, mockCredentials.password).subscribe(data => {
				// Assert
				expect(data).toEqual(mockData);
				expect(tokenService.saveToken).toHaveBeenCalledTimes(1);
				expect(tokenService.saveToken).toHaveBeenCalledWith(mockData.access_token);
				doneFn();
			});

			// http config
			const url = `${environment.API_URL}/api/v1/auth/login`;
			const req = httpController.expectOne(url);
			req.flush(mockData);
		});
	});
});
