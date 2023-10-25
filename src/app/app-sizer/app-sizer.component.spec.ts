import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSizerComponent } from './app-sizer.component';

describe('AppSizerComponent', () => {
  let component: AppSizerComponent;
  let fixture: ComponentFixture<AppSizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSizerComponent]
    });
    fixture = TestBed.createComponent(AppSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
