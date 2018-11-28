import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLines]'
})
export class LinesDirective implements OnInit {
  @Input('appLines')
  public lines: string;

  get cssClass(): string {
    return `app-lines-${this.lines}`;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.cssClass);
  }
}
