import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaFeatureComponent } from './beta-feature.component';

describe('BetaFeatureComponent', () => {
  let component: BetaFeatureComponent;
  let fixture: ComponentFixture<BetaFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetaFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
