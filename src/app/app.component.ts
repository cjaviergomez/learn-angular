import { Component } from '@angular/core';
import { TOPICS } from './core/constants/topics';
import { Topic } from './core/models/topics.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Learn';
	topics: Topic[] = TOPICS;
}
