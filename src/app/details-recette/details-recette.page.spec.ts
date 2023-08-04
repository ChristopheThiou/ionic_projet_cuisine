import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsRecettePage } from './details-recette.page';

describe('DetailsRecettePage', () => {
  let component: DetailsRecettePage;
  let fixture: ComponentFixture<DetailsRecettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
