import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service' ;


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

 noteLocation1 : string
    constructor(_dataService: DataService) {  

        _dataService.setData(this.noteLocation1);  

    }  

    Biology(){
      this.noteLocation1 ="Biology"

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