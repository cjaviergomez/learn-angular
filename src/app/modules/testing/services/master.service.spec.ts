import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

// Test service that depends on another service or has injected dependencies
describe('MasterService', () => {
  // With testBed
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>; // No usamos el servicio real sino que usamos un spy

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [MasterService, { provide: ValueService, useValue: spy }],
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    // Without testBed
    // const valueService = new ValueService();
    // const masterService: MasterService = new MasterService(valueService);
    expect(masterService).toBeTruthy();
  });

  // No se debe probar el value en sí, debemos probar que se haga el llamado al método getValue()
  // Aquí llamamos al servicio real, pero no es lo ideal, porque no nos interesa probarlo
  // it('should return value from getValue from real service', () => {
  //   const valueService = new ValueService();
  //   const masterService: MasterService = new MasterService(valueService);
  //   expect(masterService.getValue()).toBe('Value');
  // });

  // Para probar su comportamiento, debemos crear un servicio falso
  // este mock o fake service, es una versión simplificada del servicio real
  // porque no nos importa lo qué haga, sólo que se llame.
  // Ya el servicio injectado debería estar probado.
  // Esta es una forma de hacerlo, pero no es la mejor. Es poco mantenible.
  // it('should return other value from fake service', () => {
  //   const fakeValueService = new FakeValueService();
  //   const masterService: MasterService = new MasterService(
  //     fakeValueService as unknown as ValueService
  //   );
  //   expect(masterService.getValue()).toBe('Fake Value');
  // });

  // Esta es otra forma de hacerlo, usando un objecto fake y definiendo
  // el método getValue() para que retorne el valor que queremos.
  // it('should return other value from fake service object', () => {
  //   const fakeValueService = { getValue: () => 'fake value obj' };
  //   const masterService: MasterService = new MasterService(
  //     fakeValueService as ValueService
  //   );
  //   expect(masterService.getValue()).toBe('fake value obj');
  // });

  // TODO: Esta es la mejor forma de hacerlo, usando un spy
  // un spy es un objeto que registra las llamadas a sus métodos
  // y nos permite verificar que se llamen con los parámetros correctos
  it('should call to getValue from valueService', () => {
    // Mock del servicio real que se puede espiar (sin usar TestBed)
    // const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']); // create spy object
    valueServiceSpy.getValue.and.returnValue('spy value');
    expect(masterService.getValue()).toBe('spy value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled(); // El espia nos dice si se llamó al método
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1); // El espia nos dice cuantas veces se llamó al método
  });
});
