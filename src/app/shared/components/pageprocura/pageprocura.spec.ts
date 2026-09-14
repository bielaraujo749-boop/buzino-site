import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pageprocura } from './pageprocura';

describe('Pageprocura', () => {
  let component: Pageprocura;
  let fixture: ComponentFixture<Pageprocura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pageprocura],
    }).compileComponents();

    fixture = TestBed.createComponent(Pageprocura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
