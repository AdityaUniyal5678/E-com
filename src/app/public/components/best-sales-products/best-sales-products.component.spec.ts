import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSalesProductsComponent } from './best-sales-products.component';

describe('BestSalesProductsComponent', () => {
  let component: BestSalesProductsComponent;
  let fixture: ComponentFixture<BestSalesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSalesProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSalesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
