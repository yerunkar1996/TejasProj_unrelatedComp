import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component {
  // @ Input()   ParentData=""
  @ Output()  getChildEvent = new EventEmitter();


  passdata(data:any){
    this.getChildEvent.emit(data)
  }


  // @HostListener --- @Direction -- Event Handler decorator -- dom

}
