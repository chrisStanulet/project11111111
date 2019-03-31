import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
    private data: string  
  
 setData(value:string) {      
    this.data = value;  
    console.log("set runs. data was set to: " + this.data)
  }  
  
  getData() {  
    return this.data;  
    console.log("get works")
  } 

}