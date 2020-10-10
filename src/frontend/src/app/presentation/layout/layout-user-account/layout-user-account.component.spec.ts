import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUserAccountComponent } from './layout-user-account.component';

describe('LayoutUserAccountComponent', () => {
  let component: LayoutUserAccountComponent;
  let fixture: ComponentFixture<LayoutUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUserAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
