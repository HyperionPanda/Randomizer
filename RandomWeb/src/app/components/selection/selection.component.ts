import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {

  listSize : number = 0;

  constructor(private element : ElementRef){}

  toggleHide(): void {
    const itemSubmit = this.element.nativeElement.querySelector('#newItem');
    const addButton = this.element.nativeElement.querySelector('#add');
    itemSubmit.hidden = !itemSubmit.hidden;
    addButton.hidden = !addButton.hidden;
  }

  addItemToList() : void{

    if(this.listSize < 20){

      const itemList = this.element.nativeElement.querySelector('#currentItems');
      const itemValue = this.element.nativeElement.querySelector('#newItem');
      
      const addItem = document.createElement('li');
      addItem.textContent = itemValue.value;
      
      itemList.appendChild(addItem);
      this.listSize++;

    }else{
      alert("Can not add more than 20 items")
    }
  }
}
