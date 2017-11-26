import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { routing } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentstatePipe } from '../commentstate.pipe';
import { SearchPipe } from '../search.pipe';

import { AppComponent } from '../app.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { UserdetailComponent } from "./userdetail.component";

import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs/Subscription';

describe('Component: UserdetailComponent', () => {

  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserlistComponent,
        UserdetailComponent,
        CommentstatePipe,
        SearchPipe
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpModule,
        ReactiveFormsModule,
        routing,
        FormsModule
      ],
      providers: [
        DataserviceService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain form and controls', () => {
    expect(component.postCommentForm).toBeDefined();
  });

  it('should return status title', () => {
    expect(component.getStatusTitle("A")).toEqual("Active");
    expect(component.getStatusTitle("P")).toEqual("Pending confirmation");
    expect(component.getStatusTitle("D")).toEqual("Deactivated");
    expect(component.getStatusTitle("R")).toEqual("Unknown state");
  });

  it('should return gender title', () => {
    expect(component.getGenderTitle("W")).toEqual("Woman");
    expect(component.getGenderTitle("M")).toEqual("Man");
    expect(component.getGenderTitle("")).toEqual("Unknown");
  });

});
