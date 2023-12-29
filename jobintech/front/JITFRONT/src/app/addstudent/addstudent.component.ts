import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ReqService } from '../req.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit{
form!:FormGroup
updateform!:FormGroup
docs:any
inputhide="inin"
bool=true
constructor(private formBuilder: FormBuilder,private req:ReqService,private router:Router){
  this.form = this.formBuilder.group({
    StudentName: ['', Validators.required],
    number: ['', [Validators.required]],
    email: ['', Validators.required],
    speciality: ['', Validators.required]
  });

  this.updateform = this.formBuilder.group({
    uStudentName: ['', Validators.required],
    unumber: ['', [Validators.required]],
    uemail: ['', Validators.required],
    uspeciality: ['', Validators.required]
  });
}

ngOnInit(): void {
  this.getstudent()
}

add(){
  if(this.form.valid){
    this.req.poststudent(this.form.value).subscribe((doc)=>{
      doc
    })
  }
  else{
    alert("form invalid")
  }
  setTimeout(() => {
    this.getstudent()
  }, 500);
}

deleteone(id:any){
  this.req.deteteone(id).subscribe()
  setTimeout(() => {
    this.getstudent()
  }, 500);
}

deleteAll(){
  this.req.deteteAll().subscribe()
  setTimeout(() => {
    this.getstudent()
  }, 500);
}

update(doc:any){
  doc.isEditing = !doc.isEditing;
  if (!doc.isEditing) {
    this.req.update(doc.studentId,this.updateform.value).subscribe((doc)=>{
      console.log(doc)
    })
    setTimeout(() => {
      this.getstudent()
    }, 500);
  }
  else{
    
  }
    this.updateform = this.formBuilder.group({
    studentName: [doc.studentName,Validators.required],
    number: [doc.number,Validators.required],
    email: [doc.email,Validators.required],
    speciality: [doc.speciality,Validators.required]
  });
}

absence(id:any){
  this.router.navigate(["/absence",id])
}

getstudent(){
  this.req.getstudents().subscribe((doc)=>{
    this.docs=doc
  })
}
}
