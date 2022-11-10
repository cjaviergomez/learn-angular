import { Component } from '@angular/core';
import { TOPICS } from 'src/app/core/constants/topics';
import { Topic } from 'src/app/core/models';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	topics: Topic[] = TOPICS;
}
