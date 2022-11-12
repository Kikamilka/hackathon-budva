import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event?: Event;
  @Input() editMode = false;

  public readonly cities: string[] = ['Podgorica', 'Budva', 'Herceg Novi', 'Bar', 'Tivat', 'Kotor', 'Kolashin'];

  constructor() { }

  ngOnInit(): void {
  }

}
