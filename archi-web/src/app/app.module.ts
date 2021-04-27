import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import { RecetteComponent } from './recette/recette.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    RecetteComponent,
    AddRecetteComponent
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
