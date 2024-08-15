import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBottonSheetComponent } from './option-botton-sheet.component';

describe('OptionBottonSheetComponent', () => {
  let component: OptionBottonSheetComponent;
  let fixture: ComponentFixture<OptionBottonSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionBottonSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionBottonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
