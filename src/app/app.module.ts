import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// need to import the HttpModule from the @angular/http for to make us able to inject the http instance in our components
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
// importing the youTubeSearchInjectables to be able to use it
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule // for the http
  ],
  providers: [youTubeSearchInjectables], // add the youTubeSearchInjectables to the providers
  bootstrap: [AppComponent]
})
export class AppModule { }
