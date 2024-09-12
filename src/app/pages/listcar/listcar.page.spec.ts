import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListcarPage } from './listcar.page';

describe('ListcarPage', () => {
  let component: ListcarPage;
  let fixture: ComponentFixture<ListcarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
