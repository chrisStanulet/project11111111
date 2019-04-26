import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { DataService } from '../data.service';
import {BackService} from "../Back.service"
import { FormBuilder, FormGroup } from  '@angular/forms';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

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
    public dataS: DataService,      private ocr: BackService,private formBuilder: FormBuilder){
      this.notes= this.dataS.getNotes();
      this.classes = this.dataS.getClasses();

    }
    form: FormGroup;
    uploadResponse;
  
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

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    this.ocr.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
          console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }
}

