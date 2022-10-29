import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFoodyComponent } from './header-foody.component';

describe('HeaderFoodyComponent', () => {
  let component: HeaderFoodyComponent;
  let fixture: ComponentFixture<HeaderFoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFoodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
