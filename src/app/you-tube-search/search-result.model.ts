/**
 * Created by Aymen Bennour on 12/02/2018.
 */
export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  constructor(obj?: any) {
    this.id = obj && obj.id  || null;
    this.title = obj && obj.title  || null;
    this.description = obj && obj.description  || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl  || null;
    this.videoUrl = obj && obj.thumb  || `http://www.youtube.com/watch?v=${this.id}`;
  }
}// end of the class
