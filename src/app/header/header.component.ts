import { Component, OnInit,
		 OnChanges, SimpleChanges, 
		 Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Output() featureSelected = new EventEmitter<string>();

	componentName = 'This is header component!';
	constructor() {
		console.log("Constructor called!");
	}

	onSelect(value: string) {
		this.featureSelected.emit(value);
	}
}