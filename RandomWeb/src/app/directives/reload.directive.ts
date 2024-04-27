import { Directive, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[reload]',
  standalone: true
})
export class ReloadDirective implements OnInit {
  @Output() init = new EventEmitter();

  ngOnInit() {
     this.init.emit()
  }
  constructor() { }

}
