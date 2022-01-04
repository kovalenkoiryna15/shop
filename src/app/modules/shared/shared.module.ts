import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { HighlightDirective } from './directives/highlight.directive';

const material = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
];

@NgModule({
  imports: [
    ...material,
  ],
  exports: [
    ...material,
    HighlightDirective,
  ],
  declarations: [
    HighlightDirective
  ]
})
export class SharedModule {}
