import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFit]'
})
export class FitDirective implements OnInit {
  @Input('appFit')
  public fit: string;

  get cssClass(): string {
    return `app-fit-${this.fit || 'cover'}`;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.cssClass);
  }
}
