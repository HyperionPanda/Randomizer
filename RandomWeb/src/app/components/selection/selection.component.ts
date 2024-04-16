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

  @Output() updatedList = new EventEmitter<String>();

  //currently useless?
  @Input() returnedList : String[] = [];

  constructor(private element : ElementRef){}

  toggleHide(): void {
    const itemSubmit = this.element.nativeElement.querySelector('#newItem');
    const addButton = this.element.nativeElement.querySelector('#add');
    itemSubmit.hidden = !itemSubmit.hidden;
    addButton.hidden = !addButton.hidden;
  }
  
  //if a new value is added to the list, send updated list to primary app
  
  
  addItemToList() : void{

    if(this.listSize < 20){

      const itemValue = this.element.nativeElement.querySelector('#newItem');
      
      
      this.listSize++;
      this.updatedList.emit(itemValue.value);
      //console.log("This is the returned list "+ this.returnedList);
      const itemList = this.element.nativeElement.querySelector('#currentItems');
      const addItem = document.createElement('li');
      addItem.textContent = itemValue.value;
        
      itemList.appendChild(addItem);

    }else{
      alert("Can not add more than 20 items")
    }
  }
  
}
