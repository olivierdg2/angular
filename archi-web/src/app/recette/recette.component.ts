import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {RestService, Recette} from '../rest.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  recettes: Recette[] = [];
  filter: String;
  subscription: Subscription;

  constructor(public rest:RestService, private search: SearchService) { 
    this.filter = "";
    this.subscription = this.search.currentSearch.subscribe(filter => this.filter = filter);
  }

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
