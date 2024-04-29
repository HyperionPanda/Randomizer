import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHandlerService {

  //wait for the given time then continue, times by 1000 to turn into miliseconds
  delay(seconds: number) {
    return new Promise( resolve => setTimeout(resolve, seconds*1000) );
  }

  constructor() { }
}
