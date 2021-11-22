import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Student } from '../Student';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

student:Student | undefined

  constructor(private crudServie:CrudService,private router:Router) {

    
    
   }

  postHandler(data: Student) {
    console.log("inusd post handler"+data.id);
    console.log(data.name);
    this.crudServie.postData(data).subscribe((info) => {
      console.log(info)
     this.router.navigate(['getStudents']) 

    })
  }

  ngOnInit(): void {
  }

}
