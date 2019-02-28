import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked = false;
  buttonClicks = [];
  numClicks = 0;


  onClick() {
    if (this.isClicked === false) {
      this.isClicked = true;
    } else {
     this.isClicked = false;
    }

    this.numClicks++;
    this.buttonClicks.push(this.numClicks);
  }

  
}
