import { Component, OnInit } from '@angular/core';

import mockProducts from './mocks/mock.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop';

  ngOnInit() {
    localStorage.setItem('products', JSON.stringify(mockProducts))
  }
}
