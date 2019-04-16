import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
    private class: string  
    private notes : Array<{noteLocation:string, noteTitle:string ,noteText: string}> = []; 
  
 setData(value:string) {      
    this.class = value; 
  }  
  
  getData() {  
    return this.class;  
  } 
  
  addNotes(enteredNotes: Array<{noteLocation:string, noteTitle:string ,noteText: string}>){
    this.notes = enteredNotes;
  }

  getNotes(){
    return this.notes;
  }

}