import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './model/recipe';
import { EmitterService } from './emitter.service';

import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	// Constructor
	constructor(
		private recipeService: RecipeService
	){}
	// Properties
	recipes: Recipe[]; 

	// output header
  	title = 'Dirty Chefs menu!';

	ngOnInit() {
		// load Receipes
		this.loadRecipes()
	}

	loadRecipes() {
		// Get receipes
		this.recipeService.getRecipes()
		.subscribe(
			recipes => this.recipes = recipes, //Bind to view
			err => {
			    // Log errors if any
			    console.log(err);
			}
		);
	}

}