import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../classes/person.model';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
	@Input() person: Person = new Person('Carlos', 'Perez', 25, 1.72, 80);
	@Output() onSelect = new EventEmitter<Person>();
	imc = '';

	constructor() {}

	ngOnInit(): void {}

	calcIMC(): void {
		this.imc = this.person.calcIMC();
	}

	onClick(): void {
		this.onSelect.emit(this.person);
	}
}
