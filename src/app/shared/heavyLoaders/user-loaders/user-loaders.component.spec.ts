import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoadersComponent } from './user-loaders.component';

describe('UserLoadersComponent', () => {
  let component: UserLoadersComponent;
  let fixture: ComponentFixture<UserLoadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
