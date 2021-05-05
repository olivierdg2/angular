import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, RestService } from '../rest.service';

@Component({
  selector: 'app-modify-recette',
  templateUrl: './modify-recette.component.html',
  styleUrls: ['./modify-recette.component.scss']
})
export class ModifyRecetteComponent implements OnInit {

  recette: any;
  categories: Category[] = [];
  private sub: any;
  constructor(private route: ActivatedRoute, public rest:RestService, private router: Router) {

   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getRecette(params['id']);
      console.log(this.recette);
    })
    this.getCategories();
  }

  getRecette(id: number) {
    this.rest.getRecette(id).subscribe(
      (resp) => {
        console.log(resp);
        this.recette = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addRecette() {
    this.rest.modifyCategory(this.recette).subscribe(
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
