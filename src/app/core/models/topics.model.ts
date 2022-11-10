export interface Topic {
	title: string;
	subtitle: string;
	description: string;
	urlDocumentation: string;
	colorBackground: Color;
	started: boolean;
}

export type Color = '#7f57c2' | '#9675cd' | '#b39ddb' | '#d1c4e9' | '#ffca28' | '#ffd54f' | '#ffe082' | '#ffecb3';

export enum ColorEnum {
	PRIMARY_400 = '#7f57c2',
	PRIMARY_300 = '#9675cd',
	PRIMARY_200 = '#b39ddb',
	PRIMARY_100 = '#d1c4e9',
	SECONDARY_400 = '#ffca28',
	SECONDARY_300 = '#ffd54f',
	SECONDARY_200 = '#ffe082',
	SECONDARY_100 = '#ffecb3'
}
