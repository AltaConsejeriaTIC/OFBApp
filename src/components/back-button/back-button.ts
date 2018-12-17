import { Component, Input } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'app-back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {
  @Input()
  public color: string;

  constructor(private statusBar: StatusBar) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#161824');

    if (!this.color) {
      this.color = 'white';
    }
  }
}
