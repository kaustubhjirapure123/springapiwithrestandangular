import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Student } from '../Student';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  students: Student[];

  constructor(private crudService: CrudService) {

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

    this.crudService.deleteData(id, student).subscribe(data => {
      this.getHandler();
    })
  }

  ngOnInit(): void {
    this.getHandler();

  }

}
