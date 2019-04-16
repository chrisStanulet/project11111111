import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
    private class: string  
    private notes : Array<{noteLocation:string, noteTitle:string ,noteText: string}> = []; 
    private classes : Array<{className:string, classPeriod:string}> = []; 
  
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

  addClases(addedClasses: Array<{className:string, classPeriod:string}>){
    this.classes=addedClasses;
  }
  getClasses(){
return this.classes;
  }

}