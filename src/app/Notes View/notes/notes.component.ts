import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import {BackService} from '../../../Back.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    public noteLocation1:string;

    constructor(public dataS: DataService,public OCRS :BackService) {  
   

      console.log( this.OCRS.getOCRData());
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