import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CrudService } from '../crud.service';



@Component({
  selector: 'app-crudtest',
  templateUrl: './crudtest.component.html',
  styleUrls: ['./crudtest.component.css']
})
export class CrudtestComponent implements OnInit {



  studentData: any


  constructor(private crudService: CrudService) { }

  msg: any;

  // getHandler() {
  //   this.crudService.getData()
  //     .subscribe(data => {
  //       this.msg = data
  //       console.log(data)

  //     })

  // }


  // put() {
  //   this.apiService.putData()
  //     .subscribe(data => {
  //       this.msg = data
  //       console.log(data)

  //     })

  // }



  // postHandler(data: any) {
  //   console.log(data);
  //   this.apiService.postData(data).subscribe((info) => {
  //     console.log(info)
  //   })
  // }

  // delete() {
  //   this.apiService.deleteData()
  //     .subscribe(data => {
  //       this.msg = data
  //       console.log(data)

  //     })

  // }



  ngOnInit(): void {
  }
}


