import {Component, OnInit} from '@angular/core';

import { EventsService } from "../services/events.service";
import { Activity } from "../models/event.model";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  parentSubject: Subject<string> = new Subject();
  public events: Activity[] = [];

  constructor(public readonly eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.eventsService.events$.subscribe((events) => {
      this.events = events;
      console.log(this.events);
    })
  }

  public cardAnimation(value: any) {
    this.parentSubject.next(value);
  }

}
