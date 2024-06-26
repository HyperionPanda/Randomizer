import { Component, ElementRef, Renderer2, Input} from '@angular/core';
import { ReloadDirective } from '../../directives/reload.directive';
import { TimeHandlerService } from '../../services/time-handler.service';

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
  timeHandler: TimeHandlerService = new TimeHandlerService();

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []; this.counter = this.basicList.length;
  //all possible colors in order for the wedges
   this.colors = ["blue","red","orange","yellow","pink","teal",
   "green","deepskyblue","darkslategrey","crimson","burlywood",
   "magenta","crimson","fuchsia","lightblue","mediumspringgreen",
   "midnightblue","aqua","aquamarine","maroon"]}

  //changes wheel based on the number of elements and gives each element their color
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

  //spins the wheel and determines which wedge will be the winner
  async spinWheel(){

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
    await this.timeHandler.delay(5);
    this.renderer.setProperty(winner,"textContent","Winner: "+win);

  }
}
