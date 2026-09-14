import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formsprocura } from './formsprocura';

describe('Formsprocura', () => {
  let component: Formsprocura;
  let fixture: ComponentFixture<Formsprocura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formsprocura],
    }).compileComponents();

    fixture = TestBed.createComponent(Formsprocura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
