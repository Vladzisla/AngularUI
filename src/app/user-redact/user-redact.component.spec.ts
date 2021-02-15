import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRedactComponent } from './user-redact.component';

describe('UserRedactComponent', () => {
  let component: UserRedactComponent;
  let fixture: ComponentFixture<UserRedactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRedactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
