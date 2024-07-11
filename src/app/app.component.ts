import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'forwordProject';
  // name="Prathmesh"
  // a=48
  // b=78
  // z='48'

  // constructor(){
  //   this.getAddress()
  //   this.show("Kharghar")
  //   this.show(258)
  //   this.show(this.user)
  // }
  // user={
  //   name:"Prathamesh",
  //   address:"SantaCruz"
  // }
  // Address:any
  // getAddress(){
  //   this.Address="Andheri"
  //   console.log(this.Address)
  // }


  // show(x:any){
  //   this.Address=x
  //   console.log(this.Address)
  // }
  // regForm:any=[]
  // dis:any = true
  // valid(a:String,b:String,c:String,d:any,e:unknown){
  //   if(a=="" && b=="" && c=="" && d=="" && e==""){
  //   this.dis=true
  // }
  // else{
  //   this.dis=false
  // }
  // }


  // reg(a:String,b:String,c:String,d:any,e:unknown){
  //   console.log("Name: ", a)
  //   console.log("Email: ", b)
  //   console.log("Mobile No: ", c)
  //   console.log("Address: ", d)
  //   console.log("Password: ", e)

  // let regObj:any = new Object();
  // regObj["Name"] = a
  // regObj["Email"] = b
  // regObj["MobileNo"] = c
  // regObj["Address"] = d
  // regObj["Password"] = e

  // this.regForm.push(regObj)
  // console.log(this.regForm)
  // }


  // Directive -- Structural
  // status:any=true
  // color="green"
  // toggle(){
  //   this.status==true ? this.status=false : this.status=true
  // }

  // users:any=[
  //   {user:"admin1",passwd:"pass212"},
  //   {user:"admin2",passwd:"pass@2"},
  //   {user:"admin3",passwd:"pass@45"},
  //   {user:"admin4",passwd:"pass@48"},
  //   {user:"admin5",passwd:"pass@10"}
  // ]



  // Two way data binding
  // usernm:any

// Property Binding
  // bgcolor="tomato"
  // imgurl:any="https://thumbs.dreamstime.com/z/road-to-future-highway-straight-bright-66653865.jpg"

  // st="block"
  // showfun(){
  //   this.st=="none" ? this.st="block" : this.st="none"
  // }


  // Parent to Child Data Sharing
  // Data:any
  // sharedata(val:any){
  //   this.Data=val
  //   console.log(this.Data)
  // }



  //Child to Parent Data Sharing
  // ChildData:any
  // getData(event:any){
  //   this.ChildData=event
  // }


  // city:any="relax life"
  // mystyle:any={
  //   backgroundColor:"tomato",
  //   border:"2px solid black",
  //   width: "70%"
  // }
  // changestyle(){
  //   this.mystyle.backgroundColor="green"
  //   this.mystyle.color = "white"
  //   this.mystyle.margin="auto"
  // }

  // val:any={
  //   sec1 : true,
  //   para:false,
  //   items:false
  // }
  // changeclass(){
  //   this.val.sec1=false
  //   this.val.para=true
  //   this.val.items=true
  // }



  // Event Handling
  num:any=0
  counter(val:any){
    val=='+'? ++this.num : --this.num
  }

  Project:any=0
  showProject(){
    setInterval(()=>{
      if(this.Project==250){
        this.Project=250
      }
      else{
        ++this.Project
      }
    },50)
  }

  // showProject(){
  //   if(this.Project==250){
  //     this.Project=250
  //   }
  //   else{
  //     ++this.Project
  //     this.showProject()
  //   }
  // }
}
