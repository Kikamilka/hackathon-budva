import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathon';

  activeLink(linkName: string): boolean {
    return linkName === window.location.pathname;
  }
}
