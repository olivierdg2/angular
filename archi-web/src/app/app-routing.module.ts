import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecetteComponent} from "./recette/recette.component";
import {AddRecetteComponent} from './add-recette/add-recette.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: "recettes",
    component: RecetteComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
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
