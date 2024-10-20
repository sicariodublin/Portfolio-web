import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BntPrimaryComponent } from './bnt-primary.component';

describe('BntPrimaryComponent', () => {
  let component: BntPrimaryComponent;
  let fixture: ComponentFixture<BntPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BntPrimaryComponent]
    });
    fixture = TestBed.createComponent(BntPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
