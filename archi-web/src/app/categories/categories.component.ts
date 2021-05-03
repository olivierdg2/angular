import { Component, OnInit } from '@angular/core';
import { RestService, Category} from '../rest.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(public rest:RestService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        this.categories = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }
}
