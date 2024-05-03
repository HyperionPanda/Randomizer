import { Component, Input,ElementRef, Renderer2 } from '@angular/core';
import { TimeHandlerService } from '../../services/time-handler.service';


@Component({
  selector: 'app-box-shuffle',
  standalone: true,
  imports: [],
  templateUrl: './box-shuffle.component.html',
  styleUrl: './box-shuffle.component.css'
})
export class BoxShuffleComponent {

  @Input() basicList: String[];
  timeHandler: TimeHandlerService = new TimeHandlerService();
  previousWinner: number;
  currentWinner: String = "";

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []; this.previousWinner = 21;}
  
  randomPick(){
    const pickButton = this.el.nativeElement.querySelector(".center");


    let len = this.basicList.length;

    while(true){
      const val = Math.floor(Math.random() * (len));

      if (this.previousWinner == 21){
        this.previousWinner = val;
        return val;
      }else{

        if(this.previousWinner != val){
          console.log("previous = "+this.previousWinner)
          console.log("current = "+val)
          this.previousWinner = val;
          return val;
        }
      }
    }
  }

  finalPick(){
    alert(this.currentWinner);
  }
    
  async delayPattern(element: ElementRef,changeType: String,changeValue : number,changeValueType: String, numberOfRepeat : number){

    for(let i = 0; i < numberOfRepeat; i++){
      this.renderer.setStyle(element,"transform",changeType+"("+changeValue+""+changeValueType+")");
      await this.timeHandler.delay(.5);
      this.renderer.setStyle(element,"transform",changeType+"(-"+changeValue+""+changeValueType+")");
      await this.timeHandler.delay(.5);
      console.log("transform",changeType+"(-"+changeValue+""+changeValueType+")");
    }
    
    this.renderer.setStyle(element,"transform",changeType+"(0"+changeValueType+")");
    await this.timeHandler.delay(.75);
  }

  async shuffle(){

    const wholeBox = this.el.nativeElement.querySelector(".container");
    const pickButton = this.el.nativeElement.querySelector(".center");

    //Hide pick button to avoid collision
    this.renderer.setStyle(pickButton,"display","none");
   
    //call delayPattern and wait for it to finish the psuedo-animation
    await this.delayPattern(wholeBox,"rotate",45,"deg",2);
    await this.delayPattern(wholeBox,"translate",150,"px",2);

    //pick a winner
    this.currentWinner = this.basicList[this.randomPick()];

    //allow pick button to  be pressed
    this.renderer.setStyle(pickButton,"display","flex");
    
    
  }
}
