import { Component, Input,ElementRef, Renderer2 } from '@angular/core';
import { TimeHandlerService } from '../../services/time-handler.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-cardpick',
  standalone: true,
  imports: [],
  templateUrl: './card-pick.component.html',
  styleUrl: './card-pick.component.css'
})
export class CardPickComponent implements OnInit{

  @Input() basicList: String[];

  selectedList : String[];

  selectAmount : number = 1;

  constructor(private el : ElementRef, private renderer : Renderer2, private timeHandler: TimeHandlerService){this.basicList = []; this.selectedList = [];}

  ngOnInit(): void {
      this.determineSelectionAmount();
  }

  determineSelectionAmount(): void {
      const length = this.basicList.length;

      if(length != 5 && length % 5 == 1){
        this.selectAmount = 5;
      }else if (length != 3 && length % 3 == 1){
        this.selectAmount = 3;
      }else if (length != 2 && length % 2 == 1){
        this.selectAmount = 2;
      }
      console.log(this.selectAmount);
  }

  selectCard(id : String){
      const element = this.el.nativeElement.querySelector("#b-"+id);
      
      //if card selected, unselect it. Else if card unselected, select it
      if(this.selectedList.includes(element.id)){

        this.selectedList.splice(this.selectedList.indexOf(element.id),1);
        this.renderer.setAttribute(element,"class","card unselected")

      }else{
        if(this.selectedList.length < this.selectAmount){
        this.renderer.setAttribute(element,"class","card selected")
        this.selectedList.push(element.id);
        }else{
        console.log("Cannot select any more cards");
        }
      }
    
  }

  async finalSelection(){

  
    for(let i = 0; i < this.basicList.length; i++){
      const element = this.el.nativeElement.querySelector("#b-"+this.basicList[i]);
      if(this.selectedList.includes("b-"+this.basicList[i])){
        console.log(this.basicList[i]+" stays");
        //this.renderer.setAttribute(element,"class","card unselected");
      }else{
        this.renderer.setAttribute(element,"class","card unselected removeUnselected");
        await this.timeHandler.delay(2);
        this.renderer.setStyle(element, "display","none");
      }
      
    }
    if(this.selectedList.length <= 1){
      this.flip();
    }
    this.determineSelectionAmount();
  }
  flip(){
    const element = this.el.nativeElement.querySelector("#"+this.selectedList[0]);
    const cardValue = this.el.nativeElement.querySelector("#v-"+this.selectedList[0]);
    console.log("#v-"+this.selectedList[0]);
    this.renderer.setAttribute(element,"class","flip");
    this.renderer.removeAttribute(cardValue,"hidden");
  }
}
