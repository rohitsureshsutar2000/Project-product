import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
// connection between frontend and backend

apiUrl = ' http://localhost:4200/user'

// get data
  getAllData():Observable<any>
  {
    return this._http.get('{$this.apiUrl}');
  }
// create data
createData(data:any):Observable<any>{
  return this._http.post('${this.apiUrl}',data);
}

}
