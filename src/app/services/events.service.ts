import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Activity} from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url = 'https://bkjkuxabe4.execute-api.us-east-1.amazonaws.com/prod';

  public events$: BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([])

  constructor(private http: HttpClient) { }

  public getEvents() {
    this.http.get<Activity[]>(this.url + '/events').subscribe((data: Activity[]) => {
      console.log(data);
      this.events$.next(data);
    })
  }
}
