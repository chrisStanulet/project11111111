import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home Page/home/home.component';
import { NotesComponent } from './Notes View/notes/notes.component';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from './Notes View/notes/notes-view/notes-view.component';

const routes : Routes = [
  { path: 'notes', component: NotesComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'noteView', component:NotesViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { 
  
}