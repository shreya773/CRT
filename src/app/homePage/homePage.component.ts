import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit():

 
  void {
    this.renderer.addClass(this.document.body, 'homepage');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'homepage');
  }

}

