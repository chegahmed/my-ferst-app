import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by ahmed on 21/11/2018.
 */
const recipesRoutes: Routes = [
  {path:'',component:RecipesComponent, children:[
    {path:'',component:RecipesComponent},
    {path:'new',component:RecipeEditComponent,canActivate:[AuthGuard]},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuard]},
  ]},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports:[RouterModule],
  providers:[
    AuthGuard
  ]
})
export  class RecipesRoutingModule{

}
