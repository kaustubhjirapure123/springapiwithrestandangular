import { Routes } from "@angular/router";
import { GetComponent } from "./get/get.component";
import { PostComponent } from "./post/post.component";
import { PutComponent } from "./put/put.component";



export const RouteArray: Routes = [

    {
        path: 'get',
        component: GetComponent
    },

    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'student/:id',
        component: PutComponent
    },

    {
        path: '',
        redirectTo: 'get',
        pathMatch: 'full'
    }
]