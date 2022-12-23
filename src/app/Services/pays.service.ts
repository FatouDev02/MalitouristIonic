import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pays } from '../Pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  env=environment
  constructor( private http:HttpClient) { }
  addPays(pays:Pays):Observable<any>{
    return this.http.post(`${this.env.api}/ApiTourist/pays/add`,pays);
    }
    
    getall():Observable<any>{
      return this.http.get(`${this.env.api}/ApiTourist/pays/mylist`);
    }

}
