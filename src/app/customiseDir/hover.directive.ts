import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') fun1(){
    this.renderer.setStyle(this.element.nativeElement,"width","75%")
    this.renderer.setStyle(this.element.nativeElement,"border","2px solid black")
    this.renderer.setStyle(this.element.nativeElement,"padding","20px")
  }

  @HostListener('mouseleave') fun2(){
    this.renderer.setStyle(this.element.nativeElement,"padding","0%")
    this.renderer.setStyle(this.element.nativeElement,"font-size","35px")
  }

}
