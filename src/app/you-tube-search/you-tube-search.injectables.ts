/**
 * Created by Aymen Bennour on 17/02/2018.
 */
/**
 * this is the injectable so we need to register the YouTubeSearchService here to be able to inject it in the component **/
import {
  YouTubeSearchService,
  YOUTUBE_API_URL,
  YOUTUBE_API_KEY
} from './you-tube-search.service';
/**
* here we are exporting and array with 3 provide fields
* the first one is the YouTubeSearchService
* the second and third ones are the const YOUTUBE_API_KEY and YOUTUBE_API_URL
 * */
export const youTubeSearchInjectables: Array <any> = [
/* this tell Angular that we want to provide a Singleton instance of YouTubeSearchService when ever YouTubeSearchService is Injected*/
{provide: YouTubeSearchService , useClass: YouTubeSearchService},
{provide: YouTube_API_KEY , useValue: YOUTUBE_API_KEY},
{provide: YouTube_API_URL , useValue: YOUTUBE_API_URL}
];
