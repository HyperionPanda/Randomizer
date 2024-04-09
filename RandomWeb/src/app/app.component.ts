import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheelComponent } from './components/wheel/wheel.component';
import { SelectionComponent } from './components/selection/selection.component';

//For each component imported, add it to imports

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WheelComponent,SelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RandomWeb';
}
