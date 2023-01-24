import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliesterCardComponent } from './aliester-card.component';

describe('AliesterCardComponent', () => {
  let component: AliesterCardComponent;
  let fixture: ComponentFixture<AliesterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliesterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliesterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
