import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter () {
    this.isHovered = true;
  };

  @HostListener('mouseleave') onMouseLeave () {
    this.isHovered = false;
  };

  @HostBinding('class.hovered') isHovered: boolean = false;
}
