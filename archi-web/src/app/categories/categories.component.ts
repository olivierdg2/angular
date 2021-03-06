import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, public rest:RestService, private search: SearchService) { 
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

  showRecettes(name : string) {
    this.search.changeSearch(name);
    this.router.navigate(['']);
  }

  modifyCategory(index : any){
    this.router.navigate(['/category/modify',index]);
  }

  deleteCategory(id : Number, index : any){
    this.rest.deleteCategory(id).subscribe((res)=>{
      this.categories.splice(index, 1)
    },(error) =>{
      console.log(error)
    })
  }
}
