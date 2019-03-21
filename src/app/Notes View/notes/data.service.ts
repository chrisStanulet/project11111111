import { Injectable } from '@angular/core';

export class DataService {

  constructor() { }
    private data: string  
  
 setData(value:string) {      
    this.data = value;  
    console.log("set runs   " + this.data)
  }  
  
  getData() {  
    return this.data;  
    console.log("get works")
  } 

}