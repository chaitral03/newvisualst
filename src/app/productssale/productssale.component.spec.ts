import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssaleComponent } from './productssale.component';

describe('ProductssaleComponent', () => {
  let component: ProductssaleComponent;
  let fixture: ComponentFixture<ProductssaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductssaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
