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
import { UserlistComponent } from './userlist.component';
import { UserdetailComponent } from "../userdetail/userdetail.component";

import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs/Subscription';


describe('Component: UserlistComponent', () => {

  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

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
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a number of results', () => {
    expect(component.limit).toBeDefined();
    expect(component.limit).toBeLessThan(component.NUM_RESULTS + 1);
  });

  it('should load a group of users', () => {
    expect(component.users).toBeDefined();
    expect(component.users.length).toBeGreaterThan(-1);
  });

  it('should check first user', () => {
    expect(component.users).toBeDefined();
    expect(component.users[0]).toBeDefined();
    expect(component.users[0].short_name).toBeDefined();
  });

});
