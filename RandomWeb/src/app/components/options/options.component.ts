import { Component, Output,EventEmitter, Input } from '@angular/core';
import { BasicRandomComponent } from '../basic-random/basic-random.component';
import { WheelComponent } from '../wheel/wheel.component';
import { BoxShuffleComponent } from '../box-shuffle/box-shuffle.component';
import { CardPickComponent } from '../card-pick/card-pick.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [BasicRandomComponent,WheelComponent,BoxShuffleComponent,CardPickComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  optionList! : String[];
  @Input() itemList : String[] = [];

  currentOption : String = "";
  @Output() chosenOption = new EventEmitter<String>();
  
  constructor(){
    this.optionList = ["Basic","Wheel", "Box","Card", "Test"];
  }

  //make a choice on what randomizer to use
  chooseOption(choice : String){
    this.chosenOption.emit(choice);
    this.currentOption = choice;
  }
}
