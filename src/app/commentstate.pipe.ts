import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentstate'
})
export class CommentstatePipe implements PipeTransform {

  transform(value: any, code: any): any {
    if (value === undefined) {
      return value;
    } else if (value === 'N') {
      return "No validated";
    } else if (value === 'D') {
      return "Discarted";
    } else if (value === 'V') {
      return "Verified";
    } else {
      return "Unknown";
    }
  }

}
