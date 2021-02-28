import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CoursesComponent } from './courses/courses.component';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:'', component:PendingUsersComponent },
    { path:'pendings', component:PendingUsersComponent },
    { path:'courses', component:CoursesComponent  },
    { path:'addcourses', component:AddcourseComponent  }
    
    
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
