import { Component, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
  
})
export class WheelComponent {
  @Input() basicList: String[];

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []}

}
