import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-random',
  standalone: true,
  imports: [],
  templateUrl: './basic-random.component.html',
  styleUrl: './basic-random.component.css'
})
export class BasicRandomComponent {
  @Input() itemList: String[];

  constructor(){this.itemList = []}
  
  

  randomize(){
    alert("test");
  }
}
