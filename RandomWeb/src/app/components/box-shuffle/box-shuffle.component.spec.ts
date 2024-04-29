import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShuffleComponent } from './box-shuffle.component';

describe('BoxShuffleComponent', () => {
  let component: BoxShuffleComponent;
  let fixture: ComponentFixture<BoxShuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxShuffleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
