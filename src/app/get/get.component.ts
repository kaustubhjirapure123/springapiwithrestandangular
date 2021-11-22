import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Student } from '../Student';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  students: Student[];

  constructor(private crudService: CrudService, private router: Router) {

    this.students = [];
  }

  getHandler() {



    this.crudService.getData()
      .subscribe(data => {
        this.students = data
        console.log(data)

      })
  }


  deleteHandler(id: any, student: any) {
    if (confirm("Do you want to delete this record?")) {

      this.crudService.deleteData(id, student).subscribe(data => {
        this.getHandler();
      })
    }
  }

  logoutHandler() {
    console.log("Logout is firing");
    sessionStorage.removeItem('loginId');
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.getHandler();

  }

}
