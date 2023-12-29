import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AbsenceComponent } from './absence/absence.component';

const routes: Routes = [
  {path:"",redirectTo:"/add",pathMatch:"full"},
  {path:"add",component:AddstudentComponent},
  {path:"absence/:id",component:AbsenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
