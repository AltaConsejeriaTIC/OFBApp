import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective implements OnChanges {
  @Input('appHidden')
  public state: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges() {
    if (this.state) {
      this.renderer.addClass(this.el.nativeElement, 'app-hidden');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'app-hidden');
    }
  }
}
