import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private dbUrl = 'https://ng-recipe-book-25de3.firebaseio.com/';

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(this.dbUrl + 'recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.dbUrl + 'recipes.json')
      .map(
        (response: Response) => {
          //check if no ingredients were saved (empty arrays don't save inside firebase)
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
