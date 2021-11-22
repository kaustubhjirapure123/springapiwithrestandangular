import { Routes } from "@angular/router";
import { AppGuardGuard } from "./app-guard.guard";
import { CrudtestComponent } from "./crudtest/crudtest.component";
import { GetComponent } from "./get/get.component";
import { LoginComponent } from "./login/login.component";
import { PostComponent } from "./post/post.component";
import { PutComponent } from "./put/put.component";



export const RouteArray: Routes = [


    // { path: 'login', component: LoginComponent },

    {
        path: 'getStudents',
        component: GetComponent,
        canActivate: [AppGuardGuard]
    },

    {
        path: 'addStudent',
        component: PostComponent,
        canActivate: [AppGuardGuard]
    },
    {
        path: 'editStudent/:id',
        component: PutComponent,
        canActivate: [AppGuardGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'addStudent',
        pathMatch: 'full'
    },

]



