import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newEntity } from './Components/NewEntity/newEntity.component.ts';

describe('newEntity.Component', () => {
  let component: newEntity.component;
  let fixture: ComponentFixture<newEntity.Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ newEntity.Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(newEntity.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
