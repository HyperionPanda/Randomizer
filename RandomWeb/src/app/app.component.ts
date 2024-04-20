import { Component } from '@angular/core';
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
  
  //keep an updated list in the main app
  updateList(newValue : String){
    this.currentList.push(newValue);
  }
  
}
