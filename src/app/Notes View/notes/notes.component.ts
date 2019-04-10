import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    public noteLocation1:string;
    public dataS: DataService;
    constructor(public dataService: DataService) {  
      this.dataS = dataService;
    }  

    Biology(){
      this.noteLocation1 ="Biology";
      this.dataS.setData(this.noteLocation1);

    }
    History(){
      this.noteLocation1 ="History";
      this.dataS.setData(this.noteLocation1);
      
    }
    Maths(){
      this.noteLocation1 ="Maths";
      this.dataS.setData(this.noteLocation1);
    }
    English(){
      this.noteLocation1 ="English";
      this.dataS.setData(this.noteLocation1);
    }


  ngOnInit() {
  }

}