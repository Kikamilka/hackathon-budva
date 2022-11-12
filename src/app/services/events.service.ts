import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    const userID = localStorage.getItem('userId');
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-user-id': userID || '',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.get<Activity[]>(this.url + '/events', requestOptions).subscribe((data: Activity[]) => {
      console.log(data);
      this.events$.next(data);
    })
  }
}
