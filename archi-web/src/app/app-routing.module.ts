import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecetteComponent} from "./recette/recette.component";
import {AddRecetteComponent} from './add-recette/add-recette.component';

const routes: Routes = [
  {
    path: "recettes",
    component: RecetteComponent
  },
  {
    path: "add-recette",
    component: AddRecetteComponent
  },
  {
    path: "",
    redirectTo: "/recettes",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
