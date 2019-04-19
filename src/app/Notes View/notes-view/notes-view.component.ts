import { Component, Input  } from '@angular/core';
import {DataService} from '../../../data.service';
import { EmptyError } from 'rxjs';




@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent  {

  constructor(public dataService: DataService) {   
      this.currentClass = this.dataService.getData();
      this.empList = this.dataService.getNotes(); 
  }  
    currentClass :string;
    noteText : string;
    noteTitle : string;
    empList: Array<{noteLocation:string, noteTitle:string ,noteText: string}> = []; 

deleteNote(noteToDelete:number){
  this.empList.splice(noteToDelete);
}
}




