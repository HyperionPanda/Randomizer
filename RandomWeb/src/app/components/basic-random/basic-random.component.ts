import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { TimeHandlerService } from '../../services/time-handler.service';

@Component({
  selector: 'app-basic-random',
  standalone: true,
  imports: [],
  templateUrl: './basic-random.component.html',
  styleUrl: './basic-random.component.css'
})
export class BasicRandomComponent {
  @Input() basicList: String[];
  timeHandler: TimeHandlerService = new TimeHandlerService();

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []}

  //based on the length of the item list, pick a random item. Make sure each new item is different than the one before it.
  async randomize(){

    const len = this.basicList.length;
    let previous = -1;
    let val = -1;
    let picked;
    let element;
    
    for(let i = 0; i < len; i++){
        while (previous === val){
          val = Math.floor(Math.random() * (len))
        }
        previous = val;
        picked = this.basicList[val];

        //change color here to show it was selected
        element = this.el.nativeElement.querySelector("#"+picked);
        this.renderer.setStyle(element, 'background', 'yellow');

        await this.timeHandler.delay(2);

        this.renderer.setStyle(element, 'background', 'none');
    }
    this.renderer.setStyle(element, 'background', 'green');
  }
}
