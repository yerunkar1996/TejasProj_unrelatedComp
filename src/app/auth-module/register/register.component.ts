import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  ngOnInit(){
    this.reg()
  }
  Name:any=""
  Eamil:any=""
  MobileNo:any=""
  DOB:any=""
  Gender:any=""
  Address:any=""
  show(val:string, key:any){
    if(key=='name'){
      this.Name=val
      this.reg()
    }
    else if(key=='email'){
      this.Eamil=val
      this.reg()
    }
    else if(key=='mobile'){
      this.MobileNo=val
      this.reg()
    }
    else if(key=='dob'){
      this.DOB=val
      this.reg()
    }
    else if(key=='gender'){
      this.Gender=val
      this.reg()
    }
    else if(key=='address'){
      this.Address=val
this.reg()
    }
  }

  status:any=true
  reg(){
    if(this.Name !="" && this.Eamil !="" && this.MobileNo !="" && this.DOB !="" && this.Gender !="" && this.Address!=""){
      this.status=false
      alert('Register Successfully!')
    }
    else{
      this.status=true

      }
  }






}
