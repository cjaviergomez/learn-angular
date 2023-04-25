export class Person {
	constructor(
		public name: string,
		public lastName: string,
		public age: number,
		public height: number,
		public weight: number
	) {}

	calcIMC(): string {
		const imc = Math.round(this.weight / (this.height * this.height));
		// 0 - 18 = down
		// 19 - 24 = normal
		// 25 - 26 = overweigth
		// 27 - 29 = overweigth level 1
		// 30 - 39 = overweigth level 2
		// 40 = overweigth level 3

		if (imc >= 40) return 'overweight level 3';
		if (imc >= 30) return 'overweight level 2';
		if (imc >= 27) return 'overweight level 1';
		if (imc >= 25) return 'overweight';
		if (imc >= 18) return 'normal';
		if (imc >= 0) return 'down';
		return 'not found';
	}
}
