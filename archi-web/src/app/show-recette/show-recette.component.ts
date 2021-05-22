import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {RestService, Recette} from '../rest.service';
@Component({
  selector: 'app-show-recette',
  templateUrl: './show-recette.component.html',
  styleUrls: ['./show-recette.component.scss']
})
export class ShowRecetteComponent implements OnInit {

  recette: any;

  private sub: any;
  constructor(private route: ActivatedRoute, public rest:RestService) {
   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getRecette(params['id']);
      console.log(this.recette);
    })
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

}
