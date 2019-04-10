import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OCRtext} from './OCRtext';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private HTTP: HttpClient) {

   }

   getOCRData(){
     return this.HTTP.get<OCRtext>("http://10.40.4.114/backend/Vision/OCR/");
   }

}
