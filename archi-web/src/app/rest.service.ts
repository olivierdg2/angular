import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {catchError} from "rxjs/internal/operators";
import {Observable, throwError} from "rxjs";
import { HttpClient } from '@angular/common/http';

const endpoint = "http://localhost:8000/api/";

export interface Recette {
  id: number;
  name: string;
  category: Recette_Category;
  createdAt: Date;
  Ingredients: Ingredient[];
  Preparation: Step[];
  image: string;
}

export interface Recette_Category {
  id: number;
  name: string;
}

export interface Ingredient {
  Ingredient: string;
  Quantity: string;
}

export interface Step {
  Step: string;
}

export interface add_Recette {
  name: string;
  category_id: number;
  Ingredients: Ingredient[];
  Preparation: Step[];
  image: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getRecettes(): Observable<any> {
    console.log("ok");
    return this.http.get<Recette>(endpoint + "recettes");
  }

  addRecette(recette: add_Recette): Observable<any>{
    return this.http.post(endpoint + "recettes", recette)
  }

  getCategories(): Observable<any> {
    console.log("ok");
    return this.http.get<Category>(endpoint + "categories");
  }
}
