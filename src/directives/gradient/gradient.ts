import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appGradient]'
})
export class GradientDirective implements OnInit {
  @Input('appGradient')
  public color: string;

  get cssClass(): string {
    return `app-gradient--${this.color || 'white'}`;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnInit() {
    const gradient = this.renderer.createElement('div');
    this.renderer.addClass(gradient, 'app-gradient');
    this.renderer.addClass(gradient, this.cssClass);
    this.renderer.appendChild(this.el.nativeElement, gradient);
    this.renderer.addClass(this.el.nativeElement, 'app-gradient__container');
  }
}
