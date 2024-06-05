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

  lastCard : String = "";

  constructor(private el : ElementRef, private renderer : Renderer2, private timeHandler: TimeHandlerService){this.basicList = []; this.selectedList = [];}

  //figure out how many cards to allow to be selected and then randomize those cards
  ngOnInit(): void {
      this.determineSelectionAmount();
      this.randomizeCards();
  }

  randomizeCards(){
    //fisher-yates shuffle
    let currentIndex = this.basicList.length;
    
      // While there remain elements to shuffle...
    while (currentIndex != 0) {
    
        // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
    
        // And swap it with the current element.
      [this.basicList[currentIndex], this.basicList[randomIndex]] = [
        this.basicList[randomIndex], this.basicList[currentIndex]];
    }
    

  }

  //determines the number of cards that can be selected based on how many cards are left
  determineSelectionAmount(): void {

    //if there is only one card
    if(this.selectedList.length == 1){
      this.lastCard = this.selectedList[0];
    }
    //before any cards have been removed
    if (this.selectedList.length <= 0 && this.basicList.length > 1){
        this.selectAmount = this.basicList.length-1;

    }else if(this.basicList.length == 1){
        this.selectAmount = 1;
    }else{
      if(this.selectedList.length != 5 && this.selectedList.length % 5 == 1){
          this.selectAmount = 5;
      }else if (this.selectedList.length != 3 && this.selectedList.length % 3 == 1){
          this.selectAmount = 3;
      }else if (this.selectedList.length != 2 && this.selectedList.length % 2 == 1){
          this.selectAmount = 2;
      }else{
          this.selectAmount = 1;
      }
    }
      
  }

  //allows a card to be selected/unselected
  selectCard(id : String){

    if(this.selectAmount == 1){
      this.determineSelectionAmount();
    }

      const element = this.el.nativeElement.querySelector("#"+id);
      
      //if card selected, unselect it. Else if card unselected, select it
      if(this.selectedList.includes(element.id)){

        this.selectedList.splice(this.selectedList.indexOf(element.id),1);
        this.renderer.setAttribute(element,"class","card unselected")

      }else{
        if(this.selectedList.length < this.selectAmount){
        this.renderer.setAttribute(element,"class","card selected")
        this.selectedList.push(element.id);
        }
      }
    
  }

  //play animation and get rid of cards that are unselected
  async finalSelection(){
    // get rid of all cards that are unselected
    for(let i = this.basicList.length - 1; i >= 0; i--){

      const element = this.el.nativeElement.querySelector("#"+this.basicList[i]);

      if(this.selectedList.includes(this.basicList[i])){
        console.log(this.basicList[i]+" stays");
      }else{

        this.renderer.setAttribute(element,"class","card unselected removeUnselected");
        await this.timeHandler.delay(2);
        this.renderer.setStyle(element, "display","none");
        console.log(this.basicList[i]+" is removed")
        this.basicList.splice(this.basicList.indexOf(element.id),1);
      }
      
    }

    this.determineSelectionAmount();
    
    //unselect all selected cards after card removal
    for(let j = 0; j < this.selectedList.length; j++){
      const selectedElement = this.el.nativeElement.querySelector("#"+this.selectedList[j]);

      this.renderer.setAttribute(selectedElement,"class","card unselected")
    }
    this.selectedList = [];

    if(this.lastCard != ""){
      this.flip();
    }
  }
  //flips last remaining card
  flip(){
    
    const element = this.el.nativeElement.querySelector("#"+this.lastCard);
    const cardValue = this.el.nativeElement.querySelector("#v-"+this.lastCard);
    
    this.renderer.setAttribute(element,"class","flip");
    this.renderer.removeAttribute(cardValue,"hidden");
  }
}
