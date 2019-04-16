import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import {BackService} from '../../../Back.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

    classes:Array<{className:string, classPeriod:string }>;
    goingTo:string
    constructor(public dataS: DataService,private bottomSheet: MatBottomSheet,) {  
   this.classes = this.dataS.getClasses();
    }  

    routeToClass(i:number){
      
      console.log("Off to " + this.classes[i].className)
      this.dataS.setData(this.classes[i].className);
    }
    openBottomSheet(): void {
      this.bottomSheet.open(ClassBottomSheet);
    }

}

@Component({
  selector: 'ClassBottomSheet',
  templateUrl: './bottomSheetClasses.html',
})
export class ClassBottomSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<ClassBottomSheet>,
    public dataS: DataService){this.classes= this.dataS.getClasses();}

    classes:Array<{className:string, classPeriod:string}>;
    className:string;
    classPeriod:string;



    addClasses(){
      this.classes.push({ className:this.className, classPeriod:this.classPeriod});
      this.dataS.addClases(this.classes);
    }


  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
