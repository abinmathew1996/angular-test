import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllUsersLimitComponent } from './get-all-users-limit.component';

describe('GetAllUsersLimitComponent', () => {
  let component: GetAllUsersLimitComponent;
  let fixture: ComponentFixture<GetAllUsersLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllUsersLimitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllUsersLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
