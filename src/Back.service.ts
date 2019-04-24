import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {OCRtext} from './OCRtext';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: Http) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }

}
