import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
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

	it('should have a <p> with "Person works!"', () => {
		const personDebugElement: DebugElement = fixture.debugElement; // Buena practica usar el DebugElement
		const pDebug: DebugElement = personDebugElement.query(By.css('p'));
		// const compiled: HTMLElement = fixture.nativeElement;
		// const compiled: HTMLElement = personDebugElement.nativeElement;
		const pElement: HTMLElement = pDebug.nativeElement;
		expect(pElement?.textContent).toEqual('Person works!');
	});

	it('should have a <h1> with "Person"', () => {
		const personDebugElement: DebugElement = fixture.debugElement;
		const h1Debug: DebugElement = personDebugElement.query(By.css('h1'));
		const h1Element: HTMLElement = h1Debug.nativeElement;
		expect(h1Element?.textContent).toEqual('Person');
	});
});
