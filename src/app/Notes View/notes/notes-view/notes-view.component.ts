import { Component, Input  } from '@angular/core';
import {DataService} from '../../../../data.service';




@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent  {

  constructor(public dataService: DataService) {   
      this.noteLocation = this.dataService.getData();
      console.log(this.noteLocation)
      
    
  }  
    noteLocation :string;
    noteText : string;
    noteTitle : string;

    empList: Array<{noteLocation:string, noteTitle:string ,noteText: string}> = []; 



    onNoteCreate(){

        console.log(this.noteTitle,this.noteLocation,this.noteText);
        this.empList.push({ noteLocation: this.noteLocation, noteTitle:this.noteTitle, noteText: this.noteText });
        console.log(this.empList[0]) 
    
        this.noteText = "";
        this.noteTitle = "";
    }


}




