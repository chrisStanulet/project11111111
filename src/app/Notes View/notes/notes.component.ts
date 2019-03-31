import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

noteLocation1:string;
    constructor(public dataService: DataService) {  
      this.dataService.setData(noteLocation1);
    }  

    Biology(){
      this.noteLocation1 ="Biology"
      this.dataService.setData(noteLocation1);

    }
    History(){
      this.noteLocation1 ="Histroy"
      this.dataService.setData(noteLocation1);
      
    }
    Maths(){
      this.noteLocation1 ="Maths"
      this.dataService.setData(noteLocation1);
    }
    English(){
      this.noteLocation1 ="English"
      this.dataService.setData(noteLocation1);
    }


  ngOnInit() {
  }

}
class noteLocation1
{

}