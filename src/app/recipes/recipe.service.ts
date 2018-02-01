import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {
	public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
	private	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'Test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
		new Recipe('A Test Recipe 2', 'Test 2', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
		new Recipe('A Test Recipe 3', 'Test 3', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
	];

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(id: number): Recipe {
		return this.recipes[id];
	}
}