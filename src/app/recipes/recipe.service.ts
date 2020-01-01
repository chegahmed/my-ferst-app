import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";
/**
 * Created by ahmed on 24/09/2018.
 */
@Injectable()
export class RecipeService{

  // recipeSelected = new EventEmitter<Recipe>();
recipesChanged = new Subject<Recipe[]>();

private  recipes:Recipe[] = [
    new Recipe('A Test Recipe 1','This is simply a test 1','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20),
    ]),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Buns',2),
      new Ingredient('Meat',1),
    ]),
    new Recipe('A Test Recipe 3','This is simply a test 3','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Apples',1),
      new Ingredient('Meat',1),
    ]),
  ];

  constructor(private slService:ShoppingListService){}

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe ){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number ){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
