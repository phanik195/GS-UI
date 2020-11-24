import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import { Observable ,throwError} from 'rxjs';
import { catchError, share } from 'rxjs/operators';


import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isHttpProtocol: boolean;

   remoteURL: string = environment.api_url;

  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST,GET'      
    })
    
  }  


post(path: string, body: Object = {}): Observable<any> {
  return this.http.post(
    (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url}${path}`,
    JSON.stringify(body),this.getHttpOptions()).pipe(share(),catchError(this.handleError));
}

get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
  return this.http.get(
    (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url}${path}`)
    .pipe(catchError(this.handleError))
}



private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
  } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
      'Something bad happened; please try again later.');
}

getRemoteUrl(): string {
  return this.remoteURL;
}

getHttpOptions(): any {
  return this.httpOptions;
}


}
