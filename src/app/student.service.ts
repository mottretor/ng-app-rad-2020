import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3000/student"

  constructor(private http: HttpClient) {
  }

  addStudent(data): Observable<any> {
    let API_URL = `${this.url}/add`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt))
  }

  getStudents() {
    return this.http.get(`${this.url}`);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
