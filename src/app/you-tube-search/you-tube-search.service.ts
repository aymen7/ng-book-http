import {
  Injectable,
  Inject
} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from './search-result.model';
import 'rxjs/add/operator/map'; // we need to import this to be able to use the .map() on the observable
/**
 * Created by Aymen Bennour on 17/02/2018.
 */

/*
* we are making the class it self and 2 const values exportable */
export const YOUTUBE_API_KEY = 'AIzaSyBd1-d8FENZ-tOMTzTNoOP8a4lbDqsqsMM' ;
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search' ;
// the @Injectable() notation allow us to inject things into the class constructor
@Injectable()
export class YouTubeSearchService {
  /*
  * inject the 3 things:
  * http
  * YOUTUBE_API_KEY
  * YOUTUBE_API_URL
  * */
constructor(private http: Http ,
@Inject(YOUTUBE_API_KEY) private apiKey: string ,
@Inject(YOUTUBE_API_URL )private apiUrl: string) {
} // end of constructor
  /*
  * search(query: string) returns and Observable which will emit a stream of
  * SearchResult[] that is each item emitted is an array of SearchResults*/
  search(query: String): Observable<SearchResult[]> {
    /*in this we are storing the url param in a const with the name of params*/
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    /*than we are building the queryUrl by concatenating the apiUrl and and params const*/
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((res: Response) => { /*we use the map() to maps the response instance 'res'*/
      return(<any> res.json()).items.map(item => {
/*use the json() to extract the body of the res than we iterate each item and covert it to SearchResult object */
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        }); // end of the new constructor
      });
      });
}// end of the search function
} // end of the service Class

