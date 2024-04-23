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

  spinWheel(){
    let wheel = this.el.nativeElement.querySelector(".wheel");
    let spinRandomValue = Math.ceil(Math.random() * 3600);
    console.log("spin");
    this.renderer.setStyle(wheel,"transform","rotate(" + spinRandomValue + "deg)");
  }

}
