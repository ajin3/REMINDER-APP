import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

eventForm=this.fb.group({

  date:[''],
  message:['']
})
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    // if(!localStorage.getItem('loggedUser')){
    //   alert("Please login")
    //   this.router.navigateByUrl("")
    // }
  }

  addevent(){
    var date = this.eventForm.value.date
    var message = this.eventForm.value.message

    this.ds.addEvent(date,message)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('eventform')
        
      }
    },
    result=>{
      alert(result.error.message)
    })
    
  }

  veiwevent(){

  }
  
  // signOut(){
  //   localStorage.removeItem("loggedUser")
  //   localStorage.removeItem("loggedUserId")
  //   localStorage.removeItem("token")
  //   this.router.navigateByUrl("")
  // }

}
