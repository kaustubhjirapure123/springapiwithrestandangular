import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Login } from '../ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Login
  constructor(private crudService: CrudService, private router: Router) {

    this.data = { username: "", password: "" }
  }


  loginHandler(credentails: any) {
    if (credentails.username == "Admin" && credentails.password == "admin") {
      console.log("before session")
      sessionStorage.setItem('loginId', credentails.username)
      console.log("before route")
      this.router.navigate(['/get'])
  

      

    } else {
      alert('Wrong credentials')
    }
  }

  ngOnInit(): void {
  }






}
