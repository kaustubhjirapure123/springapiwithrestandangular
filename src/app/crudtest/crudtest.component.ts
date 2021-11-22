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

  ngOnInit(): void {
  }
}


