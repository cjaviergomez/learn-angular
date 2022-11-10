import { ColorEnum, Topic } from '../models';

export const TOPICS: Topic[] = [
	{
		title: 'Testing',
		subtitle: 'Karma and Jasmine',
		description: 'Testing your Angular application helps you check that your app is working as you expect.',
		urlDocumentation: 'https://angular.io/guide/testing',
		colorBackground: ColorEnum.SECONDARY_200,
		started: true
	},
	{
		title: 'Routing',
		subtitle: 'Angular Router',
		description: 'Routing helps you display specific views of your application depending on the URL.',
		urlDocumentation: 'https://angular.io/guide/router',
		colorBackground: ColorEnum.PRIMARY_200,
		started: false
	}
];
