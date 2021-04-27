import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import { ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent implements OnInit {

  recette = {
    name: "",

  }

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addRecette() {
  }

}
