import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service' ;


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

 noteLocation1 : string
    constructor(dataService: DataService) {  



    }  

    Biology(){
      this.noteLocation1 ="Biology"
         this.dataService.setData().then(noteLocation1 => this.noteLocation1 = noteLocation1);

    }
    History(){
      this.noteLocation1 ="Histroy"
    }
    Maths(){
      this.noteLocation1 ="Maths"
    }
    English(){
      this.noteLocation1 ="English"
    }


  ngOnInit() {
  }

}
class noteLocation1
{

}