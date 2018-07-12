import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {
  url = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchByTitle(title: string): Observable<any> {
    console.log('getTitle');
    return this.http.get(this.url + '?q=' + title);
  }
}
