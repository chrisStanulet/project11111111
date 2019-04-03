import { Component, Input  } from '@angular/core';
import {DataService} from '../data.service';
import {AppRoutingModule} from '../../../app-routing.module';



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




