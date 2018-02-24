/**
 * Created by Aymen Bennour on 24/02/2018.
 */
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { SearchResult } from './search-result.model';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
