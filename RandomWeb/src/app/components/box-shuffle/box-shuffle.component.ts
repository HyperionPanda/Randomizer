import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-shuffle',
  standalone: true,
  imports: [],
  templateUrl: './box-shuffle.component.html',
  styleUrl: './box-shuffle.component.css'
})
export class BoxShuffleComponent {

  @Input() basicList: String[];

  constructor(){this.basicList = [];}


  shuffle(){

  }
}
