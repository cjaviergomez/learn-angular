import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    // With TestBed, we can create a module with a fake service
    TestBed.configureTestingModule({
      providers: [ValueService],
    });
    service = TestBed.inject(ValueService);
    // Without TestBed
    // service = new ValueService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getValue()', () => {
    it(`should return 'value'`, () => {
      expect(service.getValue()).toBe('Value');
    });
  });

  describe('tests for setValue()', () => {
    it(`should change 'value'`, () => {
      expect(service.getValue()).toBe('Value');
      service.setValue('New value');
      expect(service.getValue()).toBe('New value');
    });
  });

  describe('tests for getPromiseValue()', () => {
    it(`should return 'Promise value is here' from promise with then`, (doneFn) => {
      service.getPromiseValue().then((value) => {
        // Assert
        expect(value).toBe('Promise value is here');
        doneFn(); // Tell Jasmine that the async work is complete
      });
    });

    it(`should return 'Promise value is here' using async`, async () => {
      const rta = await service.getPromiseValue();
      expect(rta).toBe('Promise value is here');
    });
  });

  describe('tests for getObservableValue()', () => {
    it(`should return 'Observable value is here' from observable`, (callback) => {
      service.getObservableValue().subscribe((value) => {
        // Assert
        expect(value).toBe('Observable value is here');
        callback(); // Tell Jasmine that the async work is complete
      });
    });
  });
});
