import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariflerComponent } from './tarifler.component';

describe('TariflerComponent', () => {
  let component: TariflerComponent;
  let fixture: ComponentFixture<TariflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariflerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
