import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService} from '../rest.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  Name: string = "";
  Descritpion: string = "";

  category = {
    Name: this.Name,
    Description: this.Descritpion
  }

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addCategory() {
    this.rest.addCategory(this.category).subscribe(
      (result) => this.router.navigate(["/categories"]));
    console.log(this.category);
  }
}
