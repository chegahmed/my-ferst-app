import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";

/**
 * Created by ahmed on 22/10/2018.
 */


const appRoutes: Routes = [
  //{path:'',redirectTo:'/recipes',pathMatch: 'full'},
  {path:'',component:HomeComponent},
  {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
  {path:'shopping-list',component:ShoppingListComponent},

  // {path:'users',component:UsersComponent, children:[
  //   {path:':id/:name',component:UserComponent},
  // ]},
  // { path:'servers',
  //   //canActivate:[AuthGuard],
  //   canActivateChild:[AuthGuard],
  //   component:ServersComponent,
  //   children:[
  //     {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
  //     {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
  //   ]},
  // //{path:'not-found',component:PageNotFoundComponent},
  // {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}},
  // {path:'**',redirectTo:'/not-found'},
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes,{useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export  class AppRoutingModule{

}
