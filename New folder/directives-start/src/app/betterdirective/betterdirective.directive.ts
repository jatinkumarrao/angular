import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterdirective]'
})
export class BetterdirectiveDirective implements OnInit {
  @Input('appBetterdirective') defaultColor:string='transparent'
  @Input() highlightColor:string='blue'
@HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private renderer:Renderer2,private elementref:ElementRef) { }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  //this.renderer.setStyle(this.elementref.nativeElement,'background-color','blue')
  }
@HostListener('mouseenter') mouseover(eventData:Event){
  this.backgroundColor=this.highlightColor;
//  this.renderer.setStyle(this.elementref.nativeElement,'background-color','blue')
}
@HostListener('mouseleave') mouseleave(eventData:Event){
  //this.renderer.setStyle(this.elementref.nativeElement,'background-color','transparent');
  this.backgroundColor=this.defaultColor;
}
}
