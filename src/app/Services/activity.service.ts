import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }
  getactivitybyId( idactivite:number):Observable<any>{
    return this.http.delete(`http://localhost:8080/ApiTourist/activite/supp/${idactivite}`);
  }
  Allactivity( ):Observable<any>{
    return this.http.get(`http://localhost:8080/ApiTourist/activite/mylist`);
  }
}
