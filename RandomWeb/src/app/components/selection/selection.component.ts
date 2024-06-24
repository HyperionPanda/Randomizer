import { Component, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {

  listSize : number = 0;

  //list to be send to the main app component
  @Output() updatedList = new EventEmitter<String>();

  constructor(private element : ElementRef){}

  //show or hide the new item input
  toggleHide(): void {
    const itemSubmit = this.element.nativeElement.querySelector('#newItem');
    const addButton = this.element.nativeElement.querySelector('#add');
    itemSubmit.hidden = !itemSubmit.hidden;
    addButton.hidden = !addButton.hidden;
  }
  
  //if a new value is added to the list, send updated list to primary app
  addItemToList() : void{

    if(this.listSize < 15){

      const item = this.element.nativeElement.querySelector('#newItem');
      
      this.listSize++;
      this.updatedList.emit(item.value);
      
      //create the new list item to be added and add it to the DOM
      const itemList = this.element.nativeElement.querySelector('#currentItems');
      const addItem = document.createElement('li');
      addItem.textContent = item.value;
      item.value = "";
        
      itemList.appendChild(addItem);

    }else{
      alert("Can not add more than 15 items")
    }
  }
  
}
