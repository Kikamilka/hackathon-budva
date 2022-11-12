import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Activity} from "../models/event.model";
import {Subject} from "rxjs";
import {animate, keyframes, transition, trigger} from "@angular/animations";
import * as kf from "../events/keyframes";

@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class SwipeCardComponent implements OnInit, OnDestroy {
  @Input() public events: Activity[] = [];
  public index = 0;
  public animationState: string = '';

  @Input() parentSubject: Subject<any> = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state: any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state: any) {
    if (this.animationState && this.index < 9) {
      this.animationState = '';
      this.index++;
    }
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}