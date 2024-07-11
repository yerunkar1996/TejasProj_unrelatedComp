import { UnrelatedService } from './../unrelated.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private serv : UnrelatedService) { }


  getData:any="Hello"
  ngOnInit(): void {
    this.serv.myMethod$.subscribe((data) => {
      this.getData = data; // And he have data here too!
    }
    );
  }




}
