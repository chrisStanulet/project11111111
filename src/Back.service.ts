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

  SERVER_URL: string = "http://10.40.4.114/";

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}backend/vision/OCR/`;
    return this.httpClient.post<OCRtext>(uploadURL, data);
  }

}

