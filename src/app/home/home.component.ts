import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, Validator, Validators} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userId: string = '';
  public userName: string = 'test';

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

  constructor() { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || '';
    this.userName = localStorage.getItem('userName') || '';
  }

  saveUser(): void {
    this.userId = uuidv4();

    localStorage.setItem('userId', this.userId);
    localStorage.setItem('userName', this.userName);
    console.log(this.userName, this.userId);
  }

}
