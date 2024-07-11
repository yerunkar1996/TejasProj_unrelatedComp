import { UnrelatedService } from './../unrelated.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private myService: UnrelatedService) {}

  // public data: any= "Hii Livewire";

  ngOnInit(): void {

  }


  show(data:any){
    this.myService.myMethod(data);
  }


}
