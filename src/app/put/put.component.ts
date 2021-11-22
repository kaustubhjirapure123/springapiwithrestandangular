import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudService } from '../crud.service';
import { Student } from '../Student';


@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  param: any;
  student: Student;


  constructor(private crudService: CrudService, private route: ActivatedRoute, private router: Router) {

    this.student = {}
  }

  editHandler(data: any) {

    this.crudService.editData(this.param, data)
      .subscribe((data: any) => {

        console.log(data)
        this.router.navigate(['get'])

      })

  }
  ngOnInit() {
    console.log("inside ng inint")

    this.param = this.route.snapshot.paramMap.get('id')
    this.crudService.getStudentbyId(this.param)
      .subscribe((data: any) => {
        this.student = data;
        console.log(data)

      })

  }
}


function data(data: any) {
  throw new Error('Function not implemented.');
}

