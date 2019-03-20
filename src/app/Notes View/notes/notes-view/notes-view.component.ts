import { Component, Input  } from '@angular/core';
import {DataService} from '../data.service'



@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent  {

  constructor(_dataService: DataService) {   
    this.noteLocation = _dataService.getData();  
  }  
    noteLocation :string ;
    noteText : string;

    empList: Array<{noteText: string}> = []; 



    onNoteCreate(){

        console.log(this.noteLocation,this.noteText);
        this.empList.push({noteText: this.noteText });
        console.log(this.empList[0]) 
    
        this.noteText = "";
    }


}




