import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service' ;


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


    constructor(dataService: DataService) {  
    }  
 noteLocation1 : string
    Biology(){
      this.noteLocation1 ="Biology"
      this.dataService.setData(noteLocation1).subscribe((dataService) => {});

    }
    History(){
      this.noteLocation1 ="Histroy"
      this.dataService.setData(noteLocation1).subscribe((dataService) => {});
      
    }
    Maths(){
      this.noteLocation1 ="Maths"
      this.dataService.setData(noteLocation1).subscribe((dataService) => {});
    }
    English(){
      this.noteLocation1 ="English"
      this.dataService.setData(noteLocation1).subscribe((dataService) => {});
    }


  ngOnInit() {
  }

}
class noteLocation1
{

}