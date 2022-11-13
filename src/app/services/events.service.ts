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
  public currentCart$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public CITIES: string[] = [
    'Podgorica', 'Budva', 'Herceg Novi', 'Bar', 'Tivat', 'Kotor', 'Kolashin', 'Zablyak'
  ]

  public INTERESTS: string[] = [
    'Football',
    'Dancing',
    'Hiking',
    'Reading',
    'Doing stuff outdoors',
    'Music',
    'Cooking',
    'Travelling',
    'Food',
    'Art',
    'IT',
    'Juggling',
    'Running',
    'Yoga',
    'Pilates',
    'Painting',
    'Wine',
    'Coffee',
    'Health',
    'Sports',
    'Poetry',
    'Nature',
    'Cooking',
    'Beer',
    'Chess',
    'Board games',
    'Dungeons & Dragons',
    'Walking',
    'Sightseeing',
    'Museums',
    'Volunteering',
    'Cats',
  ]

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
