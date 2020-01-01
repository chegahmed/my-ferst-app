import {RecipeService} from "../recipes/recipe.service";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import {AuthService} from "../auth/auth.service";
/**
 * Created by ahmed on 19/11/2018.
 */

@Injectable()
export class DataStorageService{
  constructor(private http:Http,
              private recipeService:RecipeService,
              private authService:AuthService){}

  storeRecipes(){
    let token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-112cd.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
  }

  getRecipes(){
     let token = this.authService.getToken();
     this.http.get('https://ng-recipe-book-112cd.firebaseio.com/recipes.json?auth='+token)
       .map(
         (response: Response)=>{
           const recipes: Recipe[] = response.json();
           for (let recipe of recipes){
             if(!recipe['ingredients']){
               console.log(recipe);
               recipe['ingredients'] = [];
             }
           }
           return recipes;
         })
       .subscribe(
         (recipes: Recipe[])=>{
           this.recipeService.setRecipes(recipes);
         }
       );
  }

}
