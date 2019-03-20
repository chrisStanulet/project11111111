import { Component, Input  } from '@angular/core';



@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent  {

    noteLocation :string ;
    noteText : string;

    empList: Array<{noteText: string}> = []; 

    constructor() {}

    onNoteCreate(){

        console.log(this.noteLocation,this.noteText);
        this.empList.push({noteText: this.noteText });
        console.log(this.empList[0]) 
    
        this.noteText = "";
    }


}




