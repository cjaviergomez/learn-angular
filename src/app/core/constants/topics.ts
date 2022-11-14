import { ColorEnum, Topic } from '../models';

export const TOPICS: Topic[] = [
	{
		colorBackground: ColorEnum.PRIMARY_400,
		description: 'Here you can find the description of the training and the topics that will be covered.',
		path: '../home',
		show: false,
		started: true,
		subtitle: 'Welcome to the Angular 2+ Training',
		title: 'Home',
		urlDocumentation: ''
	},
	{
		colorBackground: ColorEnum.SECONDARY_100,
		description: 'Directives are classes that add additional behavior to elements in your Angular applications.',
		path: '../directives',
		show: true,
		started: true,
		subtitle: 'Components, Attribute Directives and Structural Directives',
		title: 'Directives',
		urlDocumentation: 'https://angular.io/guide/built-in-directives'
	},
	{
		colorBackground: ColorEnum.SECONDARY_200,
		description: 'Testing your Angular application helps you check that your app is working as you expect.',
		path: '../testing',
		show: true,
		started: true,
		subtitle: 'Karma and Jasmine',
		title: 'Testing',
		urlDocumentation: 'https://angular.io/guide/testing'
	},
	{
		colorBackground: ColorEnum.PRIMARY_100,
		description: 'Routing helps you display specific views of your application depending on the URL.',
		path: '../routing',
		show: true,
		started: false,
		subtitle: 'Angular Router',
		title: 'Routing',
		urlDocumentation: 'https://angular.io/guide/router'
	}
];
