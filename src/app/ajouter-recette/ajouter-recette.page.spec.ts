import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterRecettePage } from './ajouter-recette.page';

describe('AjouterRecettePage', () => {
  let component: AjouterRecettePage;
  let fixture: ComponentFixture<AjouterRecettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
