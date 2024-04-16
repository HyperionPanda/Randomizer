import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheelComponent } from './components/wheel/wheel.component';
import { SelectionComponent } from './components/selection/selection.component';
import { OptionsComponent } from './components/options/options.component';

//For each component imported, add it to imports

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WheelComponent,SelectionComponent,OptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RandomWeb';
  currentList : String[] = [];
  //currentRandomizer : String = "default";
  
  updateList(newValue : String){
    this.currentList.push(newValue);
    console.log( this.currentList);
    //console.log(this.currentRandomizer);
  }
  /*
  newChoice(newValue : String){
    this.currentRandomizer = newValue;
  }
  */
}
