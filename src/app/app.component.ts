import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    if(localStorage.getItem('agree')) {
      this.userAgree = true;
    }
  }

  userAgree = false;

  agreeTerms() {
    localStorage.setItem('agree', 'true');
    this.userAgree = true;
  }

}
