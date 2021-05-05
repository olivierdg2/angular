import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecetteComponent} from "./recette/recette.component";
import {AddRecetteComponent} from './add-recette/add-recette.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowRecetteComponent } from './show-recette/show-recette.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';
import { ModifyRecetteComponent } from './modify-recette/modify-recette.component';

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
    path: "recette/:id",
    component: ShowRecetteComponent
  },
  {
    path: "category/:id",
    component: ShowCategoryComponent
  },
  {
    path: "add-recette",
    component: AddRecetteComponent
  },
  {
    path: "add-category",
    component: AddCategoryComponent
  },
  {
    path: "recette/modify/:id",
    component: ModifyRecetteComponent
  },
  {
    path: "category/modify/:id",
    component: ModifyCategoryComponent
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
