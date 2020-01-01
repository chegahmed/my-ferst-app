/**
 * Created by ahmed on 21/11/2018.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownDirective} from "./dropdown.directive";


@NgModule({
  declarations:[
    DropdownDirective,
  ],
  exports: [
    CommonModule,
    DropdownDirective,
  ]
})
export class SharedModule{

}
