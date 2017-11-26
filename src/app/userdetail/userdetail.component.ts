import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  userid;
  user;
  getSubscription: Subscription;
  postCommentForm;

  constructor(private route: ActivatedRoute, private dataService: DataserviceService) {
    this.userid = this.route.snapshot.params['userid'];
  }

  ngOnInit() {
    this.postCommentForm = new FormGroup({
      userCommentForm: new FormControl(""),
      subjectCommentForm: new FormControl(""),
      bodyCommentForm: new FormControl(""),
      ratingCommentForm: new FormControl("0")
    });
    this.fetchUserData();
  }

  ngOnDestroy() {
      this.getSubscription.unsubscribe();
  }

  fetchUserData() {
    if (this.userid) {
      this.getSubscription = this.dataService.getUser(this.userid).subscribe (
      (data) =>  {
          this.user = data;
        }
      );
    }
  }

  onSubmit = function(commentSent) {

    let com = {
      "subject": commentSent.subjectCommentForm,
      "body": commentSent.bodyCommentForm,
      "status": 'N',
      "rating": commentSent.ratingCommentForm,
      "user": commentSent.userCommentForm,
      "consultant": this.userid
    }

    this.dataService.postUser(JSON.stringify(com)).then( com => {
          this.reset();
      },
      error => this.errorMessage = <any>error);
  }

  // after send a comment, reset all fields
  reset() {
    this.postCommentForm = new FormGroup({
      userCommentForm: new FormControl(""),
      subjectCommentForm: new FormControl(""),
      bodyCommentForm: new FormControl(""),
      ratingCommentForm: new FormControl("0")
    });
    this.fetchUserData();
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

  // It receives gender code and returns gender name
  // param value: String
  // - "W": woman
  // - "M": man
  // - else: unknown
  getGenderTitle(value) {
    if (value=="W") {
      return "Woman";
    } else if (value=="M") {
      return "Man";
    } else {
      return "Unknown";
    }
  }

}
