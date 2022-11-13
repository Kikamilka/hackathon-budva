import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../models/event.model";
import {v4 as uuidv4} from "uuid";
import {Router} from "@angular/router";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() activity?: Activity;
  @Input() editMode = false;

  index: number | undefined;

  public readonly cities: string[] = ['Podgorica', 'Budva', 'Herceg Novi', 'Bar', 'Tivat', 'Kotor', 'Kolashin', 'Zablyak'];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.index = +window.location.pathname.split('/')[2];
    if (this.index) {
      this.activity = this.eventsService.events$.getValue()[this.index];
      console.log(this.activity);
    }

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

  returnToEvents(): void {
    void this.router.navigate(['events']);
  }

}
