import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
    private data: string;  
  
 setData( value) {      
    this.data = value;  
  }  
  
  getData() {  
    return this.data;  
  } 

}