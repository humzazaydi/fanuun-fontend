import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCaseManagerComponent } from './register-case-manager.component';

describe('RegisterCaseManagerComponent', () => {
  let component: RegisterCaseManagerComponent;
  let fixture: ComponentFixture<RegisterCaseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCaseManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
