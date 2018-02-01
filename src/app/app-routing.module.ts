import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RespieStartComponent } from './recipes/respie-start/respie-start.component';
import { RecipeAddedComponent } from './recipes/recipe-added/recipe-added.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipesComponent, children: [
		{ path: '', component: RespieStartComponent },
		{ path: 'new', component: RecipeAddedComponent },
		{ path: ':id', component: RecipeDetailComponent },
		{ path: ':id/edit', component: RecipeAddedComponent },
	] },
	{ path: 'shopping-list', component: ShoppingListComponent }
]; 
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
}