import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cardcaronas } from './cardcaronas';

describe('Cardcaronas', () => {
  let component: Cardcaronas;
  let fixture: ComponentFixture<Cardcaronas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardcaronas],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcaronas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
