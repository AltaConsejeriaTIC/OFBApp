import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class TabBarProvider {
  constructor(private events: Events) { }

  public show() {
    this.events.publish('tabbar-hidden', false);
    console.log('show tabbar');
  }

  public hide() {
    this.events.publish('tabbar-hidden', true);
    console.log('hide tabbar');
  }
}
