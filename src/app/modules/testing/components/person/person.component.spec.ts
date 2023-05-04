import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Person } from '../../classes/person.model';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
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

	it('should call select event when click on button', () => {
		// Arrange
		const expectPerson = new Person('Javier', 'Perez', 25, 1.75, 50);
		component.person = expectPerson;
		const personDebugElement: DebugElement = fixture.debugElement;
		const buttonDebug: DebugElement = personDebugElement.query(By.css('button.btn-emit'));

		let personSelected: Person | undefined;
		// Subscribe to the event emitter output property of the component
		component.onSelect.subscribe((person: Person) => {
			personSelected = person;
		});
		// Act
		buttonDebug.triggerEventHandler('click', null);
		fixture.detectChanges();
		// Assert
		expect(personSelected).toEqual(expectPerson);
	});
});

// Test output property from Host Component
@Component({
	template: ` <app-person [person]="person" (onSelect)="onSelect($event)"></app-person> `
})
class HostComponent {
	person = new Person('Santiago', 'Perez', 45, 1.75, 50);
	personSelected: Person | undefined;

	onSelect(person: Person): void {
		this.personSelected = person;
	}
}

describe('HostComponent', () => {
	let component: HostComponent;
	let fixture: ComponentFixture<HostComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HostComponent, PersonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(HostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should display person name', () => {
		// Arrange
		const expectName = component.person.name;
		const h1Debug: DebugElement = fixture.debugElement.query(By.css('app-person h1'));
		const h1Element: HTMLElement = h1Debug.nativeElement;
		// Act
		fixture.detectChanges();
		// Assert
		expect(h1Element?.textContent).toContain(expectName);
	});

	it('Should call select event when click on button', () => {
		// Arrange
		const btnEmitDebug: DebugElement = fixture.debugElement.query(By.css('app-person .btn-emit'));
		// Act
		btnEmitDebug.triggerEventHandler('click', null);
		fixture.detectChanges();
		// Assert
		expect(component.personSelected).toEqual(component.person);
	});
});
