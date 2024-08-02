import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNavigationBarComponent } from './nav-navigation-bar.component';

describe('NavNavigationBarComponent', () => {
  let component: NavNavigationBarComponent;
  let fixture: ComponentFixture<NavNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavNavigationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
