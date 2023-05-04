import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Person } from '../../classes/person.model';
import { PersonComponent } from '../person/person.component';
import { PeopleComponent } from './people.component';

fdescribe('PeopleComponent', () => {
	let component: PeopleComponent;
	let fixture: ComponentFixture<PeopleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PeopleComponent, PersonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(PeopleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a list app-person components', () => {
		// Arrange
		component.people = [
			new Person('John', 'Doe', 25, 1.5, 60),
			new Person('Jane', 'Doe', 22, 1.6, 50),
			new Person('Carlos', 'Perez', 25, 1.75, 80)
		];
		// Act
		fixture.detectChanges();
		const personComponents = fixture.debugElement.queryAll(By.css('app-person'));
		// Assert
		expect(personComponents.length).toEqual(component.people.length);
	});

	it('should select a person when choose method is called', () => {
		// Arrange
		const btnEmitDebug: DebugElement = fixture.debugElement.query(By.css('app-person .btn-emit')); // Seleccionamos el primer elemento que tenga la clase .btn-emit
		// Act
		btnEmitDebug.triggerEventHandler('click', null);
		fixture.detectChanges(); // Buena practica usarlo cuando se modifica algo del componente
		// Assert
		expect(component.personSelected).toBeTruthy();
		expect(component.personSelected).toEqual(component.people[0]);
	});

	it('should render a selected person', () => {
		// Arrange
		const btnEmitDebug: DebugElement = fixture.debugElement.query(By.css('app-person .btn-emit')); // Seleccionamos el primer elemento que tenga la clase .btn-emit
		// Act
		btnEmitDebug.triggerEventHandler('click', null);
		fixture.detectChanges(); // Buena practica usarlo cuando se modifica algo del componente
		const liSelectedPersonDebug: DebugElement = fixture.debugElement.query(By.css('.selected-person ul > li'));
		// Assert
		expect(liSelectedPersonDebug.nativeElement.textContent).toContain(component.personSelected?.name);
	});
});
