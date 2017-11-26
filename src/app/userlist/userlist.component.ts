import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  searchTerm;
  users;
  readonly NUM_RESULTS = 25;
  limit = this.NUM_RESULTS; // loaded registers currently
  disableLoadMore = true;
  subscription: Subscription;

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.subscription = this.dataService.getUserList().subscribe (
    (data) =>  {
        this.users = data;
        this.updateLoadMoreButton();
      }
    );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  // load more results
  loadMore() {
    this.limit = Math.min(this.limit + this.NUM_RESULTS, this.users.length);
    this.updateLoadMoreButton();
  }

  // update state of LoadMore button (disabled or enabled)
  updateLoadMoreButton() {
    this.disableLoadMore = this.limit >= this.users.length;
  }

  // depending on male/female code, returns a class name
  // param value: String
  // - "W": woman, pink color
  // - "M": man, blue color
  // - else: unknown, grey color
  getColorGender(value) {
    if (value=="W") {
      return "pink";
    } else if (value=="M") {
      return "blue";
    } else {
      return "grey";
    }
  }

  // depending on status code, returns a class name
  // param value: String
  // - "A": active, green color
  // - "P": pending confirmation, yellow color
  // - "D": deactivated, red color
  // - else: unknown, grey color
  getColorStatus(value) {
    if (value=="A") {
      // active user
      return "darkgreen";
    } else if (value=="P") {
      // pending confirmation
      return "orange";
    } else if (value=="D") {
      // deactivated user
      return "red";
    } else {
      // other user state
      return "grey";
    }
  }

  // depending on status code, returns the title of the status
  // param value: String
  // - "A": active
  // - "P": pending confirmation
  // - "D": deactivated
  // - else: unknown
  getStatusTitle(value) {
    if (value=="A") {
      // active user
      return "Active";
    } else if (value=="P") {
      // pending confirmation
      return "Pending confirmation";
    } else if (value=="D") {
      // deactivated user
      return "Deactivated";
    } else {
      // other user state
      return "Unknown state";
    }
  }

}
