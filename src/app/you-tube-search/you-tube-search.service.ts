import {
  Injectable,
  Inject
} from '@angular/core';
import {Http} from '@angular/http';
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
@Inject() (YOUTUBE_API_KEY) private apiKey: string ,
@Inject() (YOUTUBE_API_URL )private apiUrl: string) {
} // end of constructor
} // end of the service Class
