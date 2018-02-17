import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  loading: boolean;
  data: Object;
  // inject the http instance
  constructor(private http: Http) { }
 makeRequest(): void {
    this.loading = true;
    /*
    * this.http.request('path')
    * the request method used to make a request from a server identified by the path argument and it returns an observable object
    * .subscribe() listen to changes and when a request returns from the server a Response 'res' object will be emitted
    * .json() extract the body of the Response object and we store it in our instance 'data'
      */
    this.http.request('http://jsonplaceholder.typicode.com/posts/2').subscribe(
      (res: Response) => {this.data = res.json(); this.loading = false; }
      );
 }
  ngOnInit() {
  }

}
