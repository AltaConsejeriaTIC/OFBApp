import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({
  selector: '[appPadIos]'
})
export class PadIosDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private platform: Platform) { }

  public ngOnInit() {
    if (this.platform.is('ios')) {
      this.renderer.addClass(this.el.nativeElement, 'app-pad-ios');
    }
  }
}
