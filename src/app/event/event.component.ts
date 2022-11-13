import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../models/event.model";
import {v4 as uuidv4} from "uuid";
import {ActivatedRoute} from "@angular/router";
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

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.index = params['id'];
      if (this.index) {
        this.activity = this.eventsService.events$.getValue()[this.index];
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
    });

    // if (!this.activity) {
    //   this.activity = {
    //     city: '',
    //     datetime: '',
    //     description: '',
    //     id: uuidv4(),
    //     photo: '',
    //     teaser: '',
    //     title: '',
    //   }
    // }
  }

  addNewEvent() {
    console.log('create event: ', this.activity?.title);
  }

}
