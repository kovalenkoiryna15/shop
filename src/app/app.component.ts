import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import mockProducts from './mocks/mock.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle?: ElementRef<HTMLHeadingElement>;

  ngOnInit() {
    localStorage.setItem('products', JSON.stringify(mockProducts))
  }

  ngAfterViewInit() {
    if (this.appTitle) this.appTitle.nativeElement.innerText = "Shop";
  }
}
