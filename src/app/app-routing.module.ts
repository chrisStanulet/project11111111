import { NgModule } from '@angular/core';
import { AssignmentComponent } from './Assignment Page/assignments/assignment.component';
import { NotesComponent } from './Notes View/notes/notes.component';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from './Notes View/notes-view/notes-view.component';
import {CreateComponent} from './Flashcards Page/create/create.component'
import {ViewComponent} from'./Flashcards Page/view/view.component'

const routes : Routes = [
  { path: 'notes', component: NotesComponent  },
  { path: 'assignemnts', component: AssignmentComponent },
  { path: 'noteView', component:NotesViewComponent},
  { path: 'FCardView', component:ViewComponent},
  { path: 'FCardCreate', component:CreateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { 
  
}