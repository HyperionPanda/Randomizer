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
    

  async shuffle(){
    const wholeBox = this.el.nativeElement.querySelector(".container");

    const pickButton = this.el.nativeElement.querySelector(".center");
    this.renderer.setStyle(pickButton,"display","none");
    //translate(tx,ty)
    for(let i = 0; i < 2; i++){

      this.renderer.setStyle(wholeBox,"transform","rotate(45deg)");
      await this.timeHandler.delay(.5);
      this.renderer.setStyle(wholeBox,"transform","rotate(-45deg)");
      await this.timeHandler.delay(.5);
      
    }

    this.renderer.setStyle(wholeBox,"transform","rotate(0deg)");
    await this.timeHandler.delay(.75);

    for(let i = 0; i < 2; i++){

      this.renderer.setStyle(wholeBox,"transform","translate(150px)");
      await this.timeHandler.delay(.5);
      this.renderer.setStyle(wholeBox,"transform","translate(-150px)");
      await this.timeHandler.delay(.5);  
      
    }
    this.renderer.setStyle(wholeBox,"transform","translate(0px)");

    this.currentWinner = this.basicList[this.randomPick()];
    this.renderer.setStyle(pickButton,"display","flex");
    
    
  }
}
