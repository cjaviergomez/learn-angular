import { Component, OnInit } from '@angular/core';
import { Person } from '../../classes/person.model';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
	people: Person[] = [new Person('John', 'Doe', 25, 1.5, 60), new Person('Jane', 'Doe', 22, 1.6, 50)];

	personSelected!: Person;

	constructor() {}

	ngOnInit(): void {}

	choose(person: Person): void {
		this.personSelected = person;
	}
}
