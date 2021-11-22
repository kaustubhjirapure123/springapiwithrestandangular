import { Routes } from "@angular/router";
import { AppGuardGuard } from "./app-guard.guard";
import { CrudtestComponent } from "./crudtest/crudtest.component";
import { GetComponent } from "./get/get.component";
import { LoginComponent } from "./login/login.component";
import { PostComponent } from "./post/post.component";
import { PutComponent } from "./put/put.component";



export const RouteArray: Routes = [


    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

    {
        path: '',
        component: CrudtestComponent,
        children: [
            {
                path: 'get',
                component: GetComponent,
                canActivate: [AppGuardGuard]
            },

            {
                path: 'post',
                component: PostComponent,
                canActivate: [AppGuardGuard]
            },
            {
                path: 'student/:id',
                component: PutComponent,
                canActivate: [AppGuardGuard]
            }
        ]
    }


]