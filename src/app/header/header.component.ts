import { Component} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	componentName = 'This is header component!';
	constructor() {
		console.log("Constructor called!");
	}

}