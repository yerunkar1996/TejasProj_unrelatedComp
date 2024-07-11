import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


    rectiveFormData = new FormGroup({
      Name: new FormControl("",[Validators.required]),
      age:new FormControl(),
      mobile:new FormControl("",[Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.maxLength(8), Validators.pattern("[A-Za-z0-9]+@")]),
      dob: new FormControl(),
      address: new FormControl("",[Validators.required]),
    })

    regForm(){
      console.log(this.rectiveFormData.value)
    }

    get Name(){
      return this.rectiveFormData.get('Name')
    }
    get mobile(){
      return this.rectiveFormData.get('mobile')
    }

    get email(){
      return this.rectiveFormData.get('email')
    }

    get password(){
      return this.rectiveFormData.get('password')
    }
    get address(){
      return this.rectiveFormData.get('address')
    }
}
