import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {
  @Input()
  public color: string;

  constructor() {
    if (!this.color) {
      this.color = 'white';
    }
  }
}
