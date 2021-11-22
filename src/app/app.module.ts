import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudtestComponent } from './crudtest/crudtest.component';
import { GetComponent } from './get/get.component';
import { PutComponent } from './put/put.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { RouteArray } from './route.config';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppGuardGuard } from './app-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    CrudtestComponent,
    GetComponent,
    PutComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(RouteArray),FormsModule
  ],
 
  providers: [AppGuardGuard],
  bootstrap: [CrudtestComponent]
})
export class AppModule { }
