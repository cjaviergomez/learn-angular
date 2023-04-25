import { Person } from './person.model';

describe('Tests for Person', () => {
	let person: Person;
	beforeEach(() => {
		person = new Person('John', 'Doe', 25, 1.75, 80);
	});

	it('should create an instance', () => {
		expect(person).toBeTruthy();
	});

	it('show return the correct attributes', () => {
		expect(person.name).toEqual('John');
		expect(person.lastName).toEqual('Doe');
		expect(person.age).toEqual(25);
		expect(person.height).toEqual(1.75);
	});

	describe('Tests for calcIMC', () => {
		it('should return down', () => {
			// Arrange
			person.weight = 50;
			person.height = 1.75;
			// Act
			const result = person.calcIMC();
			// Assert
			expect(result).toEqual('down');
		});
	});
});
