import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userName = new FormControl('', Validators.required);
  public name: string = 'test';

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
  }

}
