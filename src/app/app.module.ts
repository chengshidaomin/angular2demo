import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {VideoListComponent} from './model';
import {VideoDetailComponent} from './model';
import {Panel} from './container';
import {SafePipe} from './safepipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  
  declarations: [ 
    AppComponent , 
    VideoListComponent, 
    VideoDetailComponent, 
    SafePipe, 
    Panel, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
