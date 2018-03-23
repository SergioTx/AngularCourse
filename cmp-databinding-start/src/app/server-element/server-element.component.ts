import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('ServerElementComponent - constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ServerElementComponent - ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ServerElementComponent - ngOnInit called!');
    console.log('textContent: ' + this.header.nativeElement.textContent);
    console.log('contentParagraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ServerElementComponent - ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ServerElementComponent - ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ServerElementComponent - ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ServerElementComponent - ngAfterViewInit called!');
    console.log('textContent: ' + this.header.nativeElement.textContent);
    console.log('contentParagraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ServerElementComponent - ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ServerElementComponent - ngOnDestroy called!');
  }

}
