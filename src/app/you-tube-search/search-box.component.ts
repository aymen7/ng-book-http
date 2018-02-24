/**
 * Created by Aymen Bennour on 19/02/2018.
 */
import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import {SearchResult} from './search-result.model';
import {YouTubeSearchService} from './you-tube-search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Enter your text here " autofocus>`
})
export class SearchBoxComponent implements OnInit {
  // loading will emit a boolean when the search is loading
  @Output() loading: EventEmitter <boolean> = new EventEmitter <boolean>();
  // results will emit a SearchResult[] when the search is finished
  @Output() results: EventEmitter <SearchResult[]> = new EventEmitter <SearchResult[]>();
  /* in the constructor we inject two parameters
  * 1.instance of our YouTubeSearchService
  * 2. 'el' is a reference for the  element that this component attached to (Angular thing haha) */
  constructor (private youtube: YouTubeSearchService , private el: ElementRef) {}/*end of the constructor*/
  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup') /* the first arg is the native DOM element this component is attached to
                                                          the second is the name of the event we want to turn into STREAM */
      .map((e: any) => e.target.value)                   /* extract the value of input ,in more details it say:
                                                         map over every keyUp event then find the event e.target (our input) and
                                                         extract the value .value */
      .filter((text: String) => text.length > 1)         /*filter out empty query*/
      .debounceTime(250)                                 /* only once in 250 ms */
      .do(() => this.loading.emit(true))                 // enable loading by emitting true
      .map((query: String) => this.youtube.search(query)) /*for every query entered we call the YouTubeSearchService instance youtube search() with
                                                           entered query */
      .switch()                                           /*by using switch we are saying that we want to ignore all the searches except the recent
                                                           ones */
      .subscribe(                                         /*subscribe to the search result and act on it*/
        (results: SearchResult[]) => {// on success
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {// on error
          this.loading.emit(false);
          console.log('error occurred ' + err);
        },
        () => {// on completion
          this.loading.emit(false);
        }
      );
  }/*end of the ngOnInit*/
}/*end of the class*/
