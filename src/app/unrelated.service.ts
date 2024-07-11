import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnrelatedService {

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

    constructor() {
      this.myMethod$ = this.myMethodSubject.asObservable();
    }

    Mydata:any ={"name":"mahesh"}
    myMethod(data:any) {
        console.log(data)
        this.myMethodSubject.next(data);
    }


}
