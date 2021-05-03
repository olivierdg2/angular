import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  recettes() {
    this.router.navigate(["/recettes"])
  }
  categories() {
    this.router.navigate(["/categories"])
  }
  add_recette() {
    this.router.navigate(["/add-recette"])
  }
  add_category() {
    this.router.navigate(["/add-recette"])
  }


}
