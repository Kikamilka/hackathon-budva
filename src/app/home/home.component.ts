import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {EventsService} from "../services/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userId: string = '';
  public userName: string = 'test';
  public userCity = '';
  public interests: string[] = [];

  public availableInterests = [
    {
      name: 'books',
      active: false,
    },
    {
      name: 'beer', active: false
    },
    {
      name: 'sport', active: false
    },
    {
      name: 'running',
      active: false
    },
    {
      name: 'sea',
      active: false
    },
  ];

  constructor(public eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || '';
    this.userName = localStorage.getItem('userName') || '';

    if (this.userId) {
      this.eventsService.getEvents();
    }
  }

  saveUser(): void {
    if (this.userName.length > 0) {
      this.userId = uuidv4();

      localStorage.setItem('userId', this.userId);
      localStorage.setItem('userName', this.userName);

      this.eventsService.user$.next({
        userId: this.userId,
        userName: this.userName,
        userCity: this.userCity,
        userInterests: this.interests,
      })

      // this.eventsService.getEvents();

      setTimeout(() => {
        this.eventsService.getEvents();
        void this.router.navigate(['events'])
      }, 1500);

    }
  }

  addInterests(item: string): void {
    console.log(item);

    const index = this.interests.findIndex((interest) => interest === item);
    const newArray = index === -1
      ? [...this.interests, item]
      : [...this.interests.slice(0, index), ...this.interests.slice(index + 1)];

    this.interests = [...newArray];
    console.log(this.interests);

    this.eventsService.user$.next({
      ...this.eventsService.user$.getValue(),
      userInterests: this.interests
    })
  }

  changeCity(city: string): void {
    this.userCity = city;
    this.eventsService.user$.next({
      ...this.eventsService.user$.getValue(),
      userCity: this.userCity
    })
  }

}
