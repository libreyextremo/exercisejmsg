import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { routing } from './app.routes';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from "./userdetail/userdetail.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommentstatePipe } from './commentstate.pipe';
import { SearchPipe } from './search.pipe';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('Component: AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spanEl: DebugElement;
  let buttonEl: DebugElement;
  //let passwordEl: DebugElement;

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
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have span title and button home', async(() => {
    spanEl = fixture.debugElement.query(By.css('span'));
    buttonEl= fixture.debugElement.query(By.css('button'));

    expect(spanEl).toBeDefined();
    expect(buttonEl).toBeDefined();
    expect(buttonEl.nativeElement.value).toEqual(""); // button.value = "" because contains an icon
  }));

});
