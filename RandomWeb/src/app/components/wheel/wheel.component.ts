import { Component, ElementRef, Renderer2, Input} from '@angular/core';
import { ReloadDirective } from '../../directives/reload.directive';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [ReloadDirective],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
  
})
export class WheelComponent{
  @Input() basicList: String[];
  colors : String[];
  counter: number;

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []; this.counter = this.basicList.length;
   this.colors = ["blue","red","orange","yellow","pink","teal",
   "green","deepskyblue","darkslategrey","crimson","burlywood",
   "magenta","crimson","fuchsia","lightblue","mediumspringgreen",
   "midnightblue","aqua","aquamarine","maroon"]}

  recolorWheel(){
    this.counter = this.basicList.length;
    let wheel = this.el.nativeElement.querySelector(".wheel");
    let styleString = "repeating-conic-gradient( from 0deg";
    // at 17 there are some issues, maybe try floor?
    let perWedge = Math.ceil(360/this.basicList.length);
    console.log(perWedge);

    let initialDEG = 0;
    let maxDEG = perWedge;
    for(let i = 0; i < this.counter; i++){
      styleString += ", "+this.colors[i]+" "+initialDEG+"deg " + maxDEG+"deg ";
      initialDEG = maxDEG;
      maxDEG = maxDEG + perWedge;
    }
    styleString += ")";
    console.log(styleString);
    this.renderer.setStyle(wheel,"background",styleString);
  }

  spinWheel(){
    let wheel = this.el.nativeElement.querySelector(".wheel");
    let spinRandomValue = Math.ceil(Math.random() * 3600);
    console.log("spin");
    this.renderer.setStyle(wheel,"transform","rotate(" + spinRandomValue + "deg)");
  }
  /*
  colorPick(): String{
    let len = this.colors.length;
    let val = Math.floor(Math.random() * (len));
    const end = this.colors[val];
    this.colors.splice(val,1);
    console.log(this.colors);
    return end;
  }
  */
}
