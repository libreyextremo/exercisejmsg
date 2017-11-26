import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DataserviceService } from './dataservice.service';

import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from "./userdetail/userdetail.component";

import { routing } from './app.routes';
import { CommentstatePipe } from './commentstate.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
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
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
