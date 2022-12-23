import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  env=environment;

  constructor(private http:HttpClient) { }
  getallregion(): Observable<any>{
    return this.http.get(`${this.env.api}/ApiTourist/region/mylist`)

  }
  

getnombre(id:number):Observable<any>{
  return this.http.get(`${this.env.api}/ApiTourist/pays/getnombreregionby/${id}`)

}

getpaysbyid(id:number):Observable<any>{
  return this.http.get(`${this.env.api}/ApiTourist/pays/get/${id}`)

}
  getregionparpays(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ApiTourist/region/listregionbypays/${id}`)

  }
  getregionbyid(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ApiTourist/get/${id}`)

  }
 
  add(nompays:string,population:any,region:any,file:any):Observable<any>{


    const data:FormData=new FormData();

    data.append('file',file);
    data.append('population', JSON.stringify(population).slice(1,JSON.stringify(population).lastIndexOf(']')));
    data.append('region', JSON.stringify(region).slice(1,JSON.stringify(region).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ApiTourist/region/add/${nompays}`,data);

  }


  ajoutRegionnnn(file:any,region:any):Observable<any>{
    const data:FormData=new FormData();

   
    //data.append('data',activite);
    console.log(region)
    data.append('region', JSON.stringify(region).slice(1,JSON.stringify(region).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ApiTourist/region/add/`,data);
  }
}
