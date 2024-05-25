import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPickComponent } from './card-pick.component';

describe('CardPickComponent', () => {
  let component: CardPickComponent;
  let fixture: ComponentFixture<CardPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
