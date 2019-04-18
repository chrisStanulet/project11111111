import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import {
  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { NotesComponent, ClassBottomSheet } from './Notes View/notes/notes.component';
import { AssignmentComponent } from './Assignment Page/assignments/assignment.component';

import { NotesViewComponent } from './Notes View/notes-view/notes-view.component';
import { DataService } from '../data.service';








@NgModule({
  imports:      [ 
  HttpClientModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  BrowserModule, 
  FormsModule,   
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule, ],
  entryComponents: [AppComponent, BottomSheetOverviewExampleSheet,ClassBottomSheet,NotesComponent],
  declarations: [ AppComponent, NotesComponent, AssignmentComponent, NotesViewComponent,BottomSheetOverviewExampleSheet,ClassBottomSheet],
  bootstrap:    [ AppComponent ],
  providers: [ DataService]
})
export class AppModule { }
