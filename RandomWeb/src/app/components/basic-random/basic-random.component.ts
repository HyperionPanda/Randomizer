import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-random',
  standalone: true,
  imports: [],
  templateUrl: './basic-random.component.html',
  styleUrl: './basic-random.component.css'
})
export class BasicRandomComponent {
  @Input() basicList: String[];

  constructor(){this.basicList = []}
  
  

  randomize(){

    const len = this.basicList.length;
    let previous = -1;
    let val = -1;
    let picked;
    
    for(let i = 0; i < len; i++){
        while (previous === val){
          val = Math.floor(Math.random() * (len))
        }
        previous = val;
        picked = this.basicList[val];

    }
    
    alert(picked);
  }
}
