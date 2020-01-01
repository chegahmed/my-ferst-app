import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients:Ingredient[];
  private subscription: Subscription;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    console.log(" this.ingredients ", this.ingredients);
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[] )=>{
          this.ingredients = ingredients;
        }
      );
    console.log(" this.ingredients ", this.ingredients);
  }

  onEditItem(index: number){
  this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
