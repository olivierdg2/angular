import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import { RecetteComponent } from './recette/recette.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterPipe } from './filter.pipe';
import { FilterCatPipe } from './filter-cat.pipe';
import { ShowRecetteComponent } from './show-recette/show-recette.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ModifyRecetteComponent } from './modify-recette/modify-recette.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    RecetteComponent,
    AddRecetteComponent,
    HeaderComponent,
    CategoriesComponent,
    FilterPipe,
    FilterCatPipe,
    ShowRecetteComponent,
    ShowCategoryComponent,
    AddCategoryComponent,
    ModifyRecetteComponent,
    ModifyCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
