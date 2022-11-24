import { TestBed } from '@angular/core/testing';

import { MapsService } from './maps.service';

describe('MapsService', () => {
	let mapService: MapsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [MapsService]
		});
		mapService = TestBed.inject(MapsService);
	});

	it('should be created', () => {
		expect(mapService).toBeTruthy();
	});

	describe('test for getCurrentPosition', () => {
		it('should save the current position', () => {
			// Arrange
			spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(success => {
				const mockGeoLocation = {
					coords: {
						accuracy: 0,
						altitude: 0,
						altitudeAccuracy: 0,
						heading: 0,
						latitude: 200,
						longitude: 100,
						speed: 0
					},
					timestamp: 0
				};
				success(mockGeoLocation);
			});
			// Act
			mapService.getCurrentPosition();
			// Assert
			expect(mapService.center).toEqual({ lat: 200, lng: 100 });
		});
	});
});
