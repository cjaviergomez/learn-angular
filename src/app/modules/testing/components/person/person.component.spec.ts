import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Person } from '../../classes/person.model';
import { PersonComponent } from './person.component';

fdescribe('PersonComponent', () => {
	let component: PersonComponent;
	let fixture: ComponentFixture<PersonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PersonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(PersonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a person name property equal to "Carlos"', () => {
		// Input property
		component.person = new Person('Carlos', 'Perez', 25, 1.75, 80);
		expect(component.person.name).toEqual('Carlos');
	});

	it('should have a <p> that contain "{{ person.height }}"', () => {
		// Arrange
		component.person = new Person('Javier', 'Perez', 25, 1.72, 80);
		const mockMessage = `Your height is ${component.person.height}`;
		const personDebugElement: DebugElement = fixture.debugElement; // Buena practica usar el DebugElement
		const pDebug: DebugElement = personDebugElement.query(By.css('p'));
		// const compiled: HTMLElement = fixture.nativeElement;
		// const compiled: HTMLElement = personDebugElement.nativeElement;
		const pElement: HTMLElement = pDebug.nativeElement;
		// Act
		fixture.detectChanges();
		// Assert
		expect(pElement?.textContent).toContain(component.person.height);
	});

	it('should have a <h1> with "Hi, {person.name}"', () => {
		// Arrange
		component.person = new Person('Javier', 'Perez', 25, 1.75, 80);
		const mockMessage = `Hi, ${component.person.name}`;
		const personDebugElement: DebugElement = fixture.debugElement;
		const h1Debug: DebugElement = personDebugElement.query(By.css('h1'));
		const h1Element: HTMLElement = h1Debug.nativeElement;
		// Act
		fixture.detectChanges();
		// Assert
		expect(h1Element?.textContent).toEqual(mockMessage);
	});

	it('should display a text with IMC when do click"', () => {
		// Arrange
		component.person = new Person('Javier', 'Perez', 25, 1.75, 50);
		const mockMessage = `down`;
		const personDebugElement: DebugElement = fixture.debugElement;
		const buttonDebug: DebugElement = personDebugElement.query(By.css('button.btn-imc'));
		const buttonElement: HTMLElement = buttonDebug.nativeElement;
		// Act
		buttonDebug.triggerEventHandler('click', null);
		fixture.detectChanges();
		// Assert
		expect(buttonElement?.textContent).toContain(mockMessage);
	});
});
