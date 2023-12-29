import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReqService {

  constructor(private http:HttpClient) { }

  poststudent(data:any){
    return this.http.post("http://localhost:5011/api/student",data)
  }

  getstudents(){
    return this.http.get('http://localhost:5011/api/student')
  } 

  getonestudent(name:any){
    return this.http.delete(`http://localhost:5011/api/student/${name}`)
  }

  deteteAll(){
    return this.http.delete(`http://localhost:5011/api/student`)
  }

  deteteone(id:any){
    return this.http.delete(`http://localhost:5011/api/student/${id}`)
  }

  update(id:any,data:any){
    console.log(data)
    return this.http.put(`http://localhost:5011/api/student/${id}`,data)
  }

  addAbsence(id:any,date:Date,justified:boolean){
    var a={
      id:id,
      date:date,
      justified:justified
    }
    return this.http.post("http://localhost:5011/api/student/absense",a)
  }

  GetAbsence(id:any){
    return this.http.get(`http://localhost:5011/api/student/absense/${id}`)
  }
}
