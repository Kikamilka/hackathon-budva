import { Component, OnInit } from '@angular/core';
import {EventsService} from "../services/events.service";
import {Activity} from "../models/event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: Activity[] = [];

  constructor(public readonly eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.events$.subscribe((events) => {
      this.events = events;
      console.log(this.events);
    })
  }

}
