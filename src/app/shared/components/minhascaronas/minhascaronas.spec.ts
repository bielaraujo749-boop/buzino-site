import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Minhascaronas } from './minhascaronas';

describe('Minhascaronas', () => {
  let component: Minhascaronas;
  let fixture: ComponentFixture<Minhascaronas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minhascaronas],
    }).compileComponents();

    fixture = TestBed.createComponent(Minhascaronas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
