import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import {OCRtext} from './OCRtext';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private httpClient: HttpClient) { }

  SERVER_URL: string = "http://127.0.0.1:8000/";

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.httpClient.post<any>(uploadURL, data);
  }
  
}

