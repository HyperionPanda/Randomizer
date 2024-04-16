import { Component, NgModule, Output,EventEmitter } from '@angular/core';
import { BasicRandomComponent } from '../basic-random/basic-random.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [BasicRandomComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  optionList! : String[];

  currentOption : String = "";
  @Output() chosenOption = new EventEmitter<String>();
  
  constructor(){
    this.optionList = ["Basic","Test", "Test","Test"];
  }

  chooseOption(choice : String){
    this.chosenOption.emit(choice);
  }
}
