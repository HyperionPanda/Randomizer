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

  selectedList : String[];

  constructor(private el : ElementRef, private renderer : Renderer2){this.basicList = []; this.selectedList = [];}

  selectCard(id : Number){
  
    const element = this.el.nativeElement.querySelector("#b"+id);
    
    if(this.selectedList.includes(element)){
      this.renderer.setStyle(element,"border","none");
      this.selectedList.splice(this.selectedList.indexOf(element),1);
    }else{
      this.renderer.setStyle(element,"border","10px solid yellow");
      this.selectedList.push(element);
    }

  }

}
