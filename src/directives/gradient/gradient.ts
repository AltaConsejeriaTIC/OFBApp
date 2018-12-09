import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGradient]'
})
export class GradientDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnInit() {
    const gradient = this.renderer.createElement('div');
    this.renderer.addClass(gradient, 'app-gradient');
    this.renderer.appendChild(this.el.nativeElement, gradient);
    this.renderer.addClass(this.el.nativeElement, 'app-gradient__container');
  }
}
