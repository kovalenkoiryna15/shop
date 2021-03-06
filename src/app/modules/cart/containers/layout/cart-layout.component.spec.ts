import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLayoutComponent } from './cart-layout.component';

describe('LayoutComponent', () => {
  let component: CartLayoutComponent;
  let fixture: ComponentFixture<CartLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
