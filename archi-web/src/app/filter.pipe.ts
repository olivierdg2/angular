import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    console.log(items)
    console.log(filter)
    return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.category.name.toLowerCase().includes(filter.toLowerCase()) );
  }

}
