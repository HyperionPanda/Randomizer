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
  previousWinner: number = 21;
  currentWinner: String = "";

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = [];}
  
  randomPick(){

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
      return val;
    }
  }
    

  async shuffle(){
    const wholeBox = this.el.nativeElement.querySelector(".container");
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
    
    
  }
}
