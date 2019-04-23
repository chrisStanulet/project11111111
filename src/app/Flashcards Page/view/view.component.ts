import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service'

@Component({
  selector: 'my-app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  flashcards:Array<{term:string, description:string}>[];

  constructor(public dataS:DataService) { }
  

  ngOnInit() {
  }

}
