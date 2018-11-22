import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground')
  public background: string;

  get cssClass(): string {
    return `app-background-${this.background}`;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.cssClass);
  }
}
