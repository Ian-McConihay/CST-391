import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionList } from './devotion-list';

describe('DevotionList', () => {
  let component: DevotionList;
  let fixture: ComponentFixture<DevotionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
