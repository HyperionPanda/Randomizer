import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRandomComponent } from './basic-random.component';

describe('BasicRandomComponent', () => {
  let component: BasicRandomComponent;
  let fixture: ComponentFixture<BasicRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
