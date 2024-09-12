import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListviajePage } from './listviaje.page';

describe('ListviajePage', () => {
  let component: ListviajePage;
  let fixture: ComponentFixture<ListviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
