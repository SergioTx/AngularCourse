import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    //const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer asdfasdfasdfasdfasdf');

    // return this.httpClient.put('https://ng-recipe-book-25de3.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());

    /* return this.httpClient.put('https://ng-recipe-book-25de3.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'events', //other options: body
      //headers: headers,
      params: new HttpParams().set('auth', token)
    }); */

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-25de3.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true, //will give feedback about progress
      //params: new HttpParams().set('auth', token)
    });
    return this.httpClient.request(req);

  }

  getRecipes() {
    //const token = this.authService.getToken();

    /*this.httpClient.get<Recipe[]>('https://ng-recipe-book-25de3.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
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
      );*/
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-25de3.firebaseio.com/recipes.json'/*?auth=' + token*/, {
      observe: 'body',  //other options: response
      responseType: 'json' //other options: json, blob, arraybuffer
    })
      .map(
        (recipes) => {
          console.log(recipes);
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
