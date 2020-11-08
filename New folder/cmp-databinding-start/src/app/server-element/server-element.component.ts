import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,ViewChild, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@ContentChild('contentParagraph')  paragraph:ElementRef;
  @ViewChild('heading') header:ElementRef;
  @Input('srvElement') element:{type:string,name:string,content:string}
@Input() name: string;
  constructor() { 
    console.log('constructor called!')
  }
ngOnChanges(changes: SimpleChanges){
  console.log('ngOnchanges called!')
  console.log(changes)
}
ngDoCheck(){
  console.log('ngDoCheck called!')
  
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!')
  
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called!')
  
}
ngAfterViewInit(){
  console.log('ngAfterViewInit called!')
  console.log("Text "+this.header.nativeElement.textContent);
  console.log("Text33 "+this.paragraph.nativeElement.textContent);  
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!')
  
}

ngOnDestroy(){
  console.log('ngOnDestroy called!')
  
}
  ngOnInit(): void {
    console.log('ngOnInit called!')
   
  }

}
