import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../models/event.model";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() activity?: Activity;
  @Input() editMode = false;

  public readonly cities: string[] = ['Podgorica', 'Budva', 'Herceg Novi', 'Bar', 'Tivat', 'Kotor', 'Kolashin'];

  constructor() { }

  ngOnInit(): void {
    if (!this.activity) {
      this.activity = {
        city: '',
        datetime: '',
        description: '',
        id: uuidv4(),
        photo: '',
        teaser: '',
        title: '',
      }
    }
  }

  addNewEvent() {
    console.log('create event: ', this.activity?.title);
  }

}
