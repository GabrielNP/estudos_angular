import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Directive({
  selector: '[apDarkOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness: string = '70%';

  constructor(private el: ElementRef,
              private render: Renderer2) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
