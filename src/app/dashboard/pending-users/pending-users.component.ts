import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pending-users',
  templateUrl: './pending-users.component.html',
  styleUrls: ['./pending-users.component.css']
})
export class PendingUsersComponent implements OnInit {



  pendingsUsers:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.getNewUsersRequest();
  }




  getNewUsersRequest(){
    this.api.getNewUsersRequests().subscribe((data:any)=>{
      console.log(data);

      this.pendingsUsers = data;
    })
  }

  deleteUser(id){
    console.log(id);

    if (confirm("do your really wanna delete this user")) {
      this.api.deleteUser(id).subscribe((data:any)=>{
        if (data.success === true) {
          this.getNewUsersRequest();
        }else{
          alert("oups")
        }
      },(err)=>{
        alert("oups")
      })
    }
    
  }

  acceptUser(id){
    console.log(id);

    if (confirm("do your really wanna accept this user")) {
      this.api.acceptUser(id).subscribe((data:any)=>{
        if (data.success === true) {
          this.getNewUsersRequest();
        }else{
          alert("oups")
        }
      },(err)=>{
        alert("oups")
      })
    }
    
  }
}
