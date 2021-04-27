import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {catchError} from "rxjs/internal/operators";
import {Observable, throwError} from "rxjs";
import { HttpClient } from '@angular/common/http';

const endpoint = "http://localhost:8000/api/";

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

export interface Recette {
  id: number;
  name: string;
  category: Recette_Category;
  createdAt: Date;
  Ingredients: Ingredient[];
  Preparation: Step[];
  image: string;
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
}
