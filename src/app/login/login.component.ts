import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

acno=""
pswd=""
db:any = {
  1000:{"acno":1000,"username":"Ajin","password":1000}
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //user defined functions
acnoChange(event:any){
  this.acno=event.target.value
}
pswdChange(event:any){
  this.pswd=event.target.value
}



  login(){
    var acno = this.acno
    var pswd = this.pswd

    let db=this.db
    if (acno in db){
      if (pswd == db[acno]["password"]){
alert("Loged in Successfully")

this.router.navigateByUrl('dashboard')
      }
      else{
        alert("Incorrect Password")
      }
    }
      else{
        alert("User doesnot exist")
     
    }
  }
}
