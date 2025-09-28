import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionForm } from './devotion-form';

describe('DevotionForm', () => {
  let component: DevotionForm;
  let fixture: ComponentFixture<DevotionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
