import { Component, OnInit } from '@angular/core';
import {RestService, Recette, Recette_Category, Category, Ingredient, Step} from "../rest.service";
import { ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})

export class AddRecetteComponent implements OnInit {


  recette_name: string = "";
  category_id: number = 0;
  Ingredients: Ingredient[] = [];
  Preparation: Step[] = [];
  image: string = "";

  recette = {
    name: this.recette_name,
    category_id: this.category_id,
    Ingredients: this.Ingredients,
    Preparation: this.Preparation,
    image: this.image,
  }


  categories: Category[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  addRecette() {
    this.rest.addRecette(this.recette).subscribe(
      (result) => this.router.navigate(["/recettes"]));
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

  addStep(){
    var new_Step = {
      Step: "",
    }

    this.recette.Preparation.push(new_Step);
  }

}
