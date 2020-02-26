import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSecondDirectives]'
})
export class SecondDirectivesDirective implements OnInit{
 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private renderer2:Renderer2,private elRef:ElementRef) { }
  ngOnInit(): void {
    this.renderer2.setStyle(this.elRef.nativeElement , 'backgroundColor' ,'aqua')
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer2.setStyle(this.elRef.nativeElement , 'backgroundColor' ,'pink')//HostListener
    this.backgroundColor = 'pink'
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer2.setStyle(this.elRef.nativeElement , 'backgroundColor' ,'aqua')//HostListener
    this.backgroundColor = 'aqua'
  }

}
