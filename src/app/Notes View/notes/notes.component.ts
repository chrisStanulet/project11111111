import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import {AppRoutingModule} from '../../app-routing.module';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    public noteLocation1:string;
    constructor(public dataService: DataService) {  
    }  

    Biology(){
      this.noteLocation1 ="Biology"
      this.dataService.setData(this.noteLocation1);

    }
    History(){
      this.noteLocation1 ="Histroy"
      this.dataService.setData(this.noteLocation1);
      
    }
    Maths(){
      this.noteLocation1 ="Maths"
      this.dataService.setData(this.noteLocation1);
    }
    English(){
      this.noteLocation1 ="English"
      this.dataService.setData(this.noteLocation1);
    }


  ngOnInit() {
  }

}