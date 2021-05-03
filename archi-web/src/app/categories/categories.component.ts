import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestService, Category} from '../rest.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  filter: String;
  subscription: Subscription;

  constructor(public rest:RestService, private search: SearchService) { 
    this.filter = "";
    this.subscription = this.search.currentSearch.subscribe(filter => this.filter = filter);
  }

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
