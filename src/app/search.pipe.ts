import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any, term: any): any {
    if (term === undefined) return users;
    return users.filter(function(user){
      let chain = user.short_name + " " + user.full_name;
      return chain.toLowerCase().includes(term.toLowerCase());
    });
  }

}
