import {Ingredient} from "../shared/ingredient.model";
/**
 * Created by ahmed on 01/09/2018.
 */
export  class  Recipe{
  public name:string;
  public description:string;
  public imagePath:string;
  public ingredients :Ingredient[];

  constructor(name:string,desc:string,imagePath:string,ingredient:Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients=ingredient;

  }
}
