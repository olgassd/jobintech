import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqService } from '../req.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrl: './absence.component.css'
})
export class AbsenceComponent {
  studentId: any;
  ischecked!:Boolean
  stoptext!: boolean;
  constructor(private route: ActivatedRoute,private req:ReqService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });
  }

  addabsence(date:any,description:any){
    console.log(date+"  "+this.ischecked+"  "+description)
    //this.req.addAbsence(this.studentId,date,justified).subscribe((doc)=>{
    //  doc
    //})
  }



}
