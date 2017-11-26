import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataserviceService {

  constructor(private http: Http) { }

  // get all users
  getUserList() {
    return this.http.get('http://demopeople.exolever.com/api/consultants/').map(
      (response) => response.json()
    );
  }

  // get an unique user
  // param userid: user id field
  getUser(userid) {
    if (userid) {
      return this.http.get('http://demopeople.exolever.com/api/consultants/' + userid + '/').map(
        (response) => response.json()
      );
    }
  }

  // post user changes
  // param userid: user id field
  postUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://demopeople.exolever.com/api/comment/', user, options).toPromise()
         .then(this.extractData)
         .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
