import { Component, ElementRef, Renderer2, Input} from '@angular/core';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
  
})
export class WheelComponent{
  @Input() basicList: String[];
  colors : String[];

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []; this.colors = ["blue","red","orange",
  "yellow","pink","teal","green","deepskyblue","darkslategrey",
  "crimson","burlywood","magenta","crimson","fuchsia","lightblue",
  "mediumspringgreen","midnightblue","aqua","aquamarine","maroon"]}


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
