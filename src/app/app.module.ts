import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { bugTrackerComponent } from './bugTracker/bugTracker.component';

@NgModule({
  declarations: [
    AppComponent,
    bugTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
