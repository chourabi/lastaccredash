import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = []

  pendingsUsers:any = [];
  username = localStorage.getItem('username');

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    const role = localStorage.getItem('role');

    switch (role) {
      case 'ADMIN':
        this.menu = [{
          title: "New Users Requests",
          counter: 0,
          link: '/dashboard/home/pendings',
          subMenus: []
        },

        {
          title: "New test",
          counter: 0,
          link: '',
          subMenus: []
        },
        ]
        break;

      case 'PROFFESSOR':
        this.menu = [
        {
          title: "My courses",
          counter: 0,
          link: '/home/courses',
          subMenus: []
        },


        ]


        break;  

      default:
        break;
    }


    this.getNewUsersRequest();
  }




  getNewUsersRequest(){
    this.api.getNewUsersRequests().subscribe((data:any)=>{
      console.log(data);

      this.pendingsUsers = data;

      // init data table
      this.menu[0].counter = data.length;
      
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
