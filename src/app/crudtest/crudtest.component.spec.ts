import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtestComponent } from './crudtest.component';

describe('CrudtestComponent', () => {
  let component: CrudtestComponent;
  let fixture: ComponentFixture<CrudtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
