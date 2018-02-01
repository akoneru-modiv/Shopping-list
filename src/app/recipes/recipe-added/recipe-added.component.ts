import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-added',
  templateUrl: './recipe-added.component.html',
  styleUrls: ['./recipe-added.component.css']
})
export class RecipeAddedComponent implements OnInit {

	id: number;
	editMode: boolean = false;
		
	constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	  this.route.params
		  .subscribe(
			  	(param: Params[]) => {
						this.id = +param['id'];
						this.editMode = param['id'] != null;
			  	}	
		  	);
  }

}
