import { Component, OnInit } from '@angular/core';
import {RestService, Recette, Recette_Category, Category, Ingredient, Step} from "../rest.service";
import { ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})

export class AddRecetteComponent implements OnInit {


  Name: string = "";
  Category: number = 0;
  Ingredients: Ingredient[] = [];
  Preparation: Step[] = [];
  Image: string = "";

  recette = {
    Name: this.Name,
    Category: this.Category,
    Ingredients: this.Ingredients,
    Preparation: this.Preparation,
    Image: this.Image,
  }


  categories: Category[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  addRecette() {
    this.rest.addRecette(this.recette).subscribe(
      (result) => this.router.navigate(["/recettes"]));
    console.log(this.recette);
  }

  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addIngredient(){
    var new_Ingredient = {
      Ingredient: "",
      Quantity: ""
    }

    this.recette.Ingredients.push(new_Ingredient);
    console.log(this.recette.Ingredients)
  }

  deleteIngredient(id:number){

  }

  addStep(){
    var new_Step = {
      Step: "",
    }

    this.recette.Preparation.push(new_Step);
  }

}
