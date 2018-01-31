import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Strawberries', 10)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(value: Ingredient) {
		this.ingredients.push(value);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}