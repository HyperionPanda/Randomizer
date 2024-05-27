import { Component, Input,ElementRef, Renderer2 } from '@angular/core';
import { TimeHandlerService } from '../../services/time-handler.service';


@Component({
  selector: 'app-cardpick',
  standalone: true,
  imports: [],
  templateUrl: './card-pick.component.html',
  styleUrl: './card-pick.component.css'
})
export class CardPickComponent {

  @Input() basicList: String[];

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = [];}

  selectCard(){
    alert();
  }

}
