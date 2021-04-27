import { Component, OnInit } from '@angular/core';
import {RestService, Recette} from '../rest.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  recettes: Recette[] = [];

  constructor(public rest:RestService, private router: Router) { }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes() {
    this.rest.getRecettes().subscribe(
      (resp) => {
        console.log(resp);
        this.recettes = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

}
