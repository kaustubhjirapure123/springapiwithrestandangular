import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student } from './Student';
import { catchError, filter, map, mapTo, tap } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})
export class CrudService {

    student: String | undefined;
    userState: String;

    url = "http://localhost:8222/api/v1";
    putHandler: any;
    admin: any;

    constructor(private http: HttpClient) {

        this.userState = 'Admin';
    }

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getData(): Observable<Student[]> {

        return this.http.get<any>(this.url + "/getstudents")
    }

    postData(data: Student | undefined) {

        console.log("inside service " + data)
        return this.http.post(this.url + "/addstudent", data, { responseType: 'text' })
    }

    editData(id: number, data: any) {

        console.log("inside edit data")

        console.log("id-" + id)
        console.log("nane-" + data.name)



        // const options = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json', })
        //     , body: { id: id, name: data.name, },
        // };
        return this.http.put(this.url + "/updatestudent/" + id, data, { responseType: 'text' })
    }

    deleteData(id: number, data: Student) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', })
            , body: { id: id, name: data.name, },
        };

        return this.http.delete(this.url + "/delete/" + id, options)

    }

    getStudentbyId(id: number): Observable<Student | undefined> {
        return this.getData().pipe(map((students: Student[]) => students.find(s => s.id == id)
        ))
    }

   


}