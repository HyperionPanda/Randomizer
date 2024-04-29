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
    let perWedge = Math.floor(360/this.basicList.length);

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
    let winner = this.el.nativeElement.querySelector(".winner");
    let spinRandomValue = Math.ceil(Math.random() * 3600);
    this.renderer.setStyle(wheel,"transform","rotate(" + spinRandomValue + "deg)");

    let winValue = 360 - spinRandomValue%360;
    let win = this.basicList[this.basicList.length-1];
    let current = 0;
    let past = 0;
    const perWedge = Math.floor(360/this.basicList.length);
    
    for (let i = 0; i < this.basicList.length; i++){
      
      if(current >= winValue && past <= winValue){
  
        win = ""+this.basicList[i-1];
        break;

      }else{
        past = current;
        current += perWedge;

      }
    }
    
    this.renderer.setProperty(winner,"textContent",win);

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
