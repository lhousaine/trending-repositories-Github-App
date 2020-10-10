import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutReposComponent } from './layout-repos.component';

describe('LayoutReposComponent', () => {
  let component: LayoutReposComponent;
  let fixture: ComponentFixture<LayoutReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
