import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { DataService } from '../data.service';
import {BackService} from "../Back.service"




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(
    private bottomSheet: MatBottomSheet,
    public dataS: DataService){this.notes= this.dataS.getNotes();}

  notes:Array<{noteLocation:string, noteTitle:string ,noteText: string}>;
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './BottomSheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    public dataS: DataService){
      this.notes= this.dataS.getNotes();
      this.classes = this.dataS.getClasses();
    }

    classes:Array<{className:string, classPeriod:string}>;
    notes:Array<{noteLocation:string, noteTitle:string ,noteText: string}>;
    noteLocation:string;
    noteText:string;
    noteTitle:string;

    onNoteCreate(){
      console.log(this.noteTitle,this.noteLocation,this.noteText);
      this.notes.push({ noteLocation: this.noteLocation, noteTitle:this.noteTitle, noteText: this.noteText });
      this.dataS.addNotes(this.notes);
      this.noteText = "";
      this.noteTitle = "";
  }
  getOCR(){
    console.log("this does")
  }


  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

