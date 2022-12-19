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
  getallregion(){

  }
  ajoutRegionn( password: String,token: String,coderegion:String,nomregion:String,
    Superficie:String,langue:String,description:String,file:any): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "username or token": token, "password": password }]


    const region = [{
      "coderegion": coderegion,
      'nomregion': nomregion,
      "Superficie": Superficie,
      "langue": langue,
      "description": description,
    }]

    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));
    data.append('file',file)

    return this.http.post(`${this.env.api}/ApiTourist/region/add/`, data);
  }
  ajoutRegion(login:string,password:string,file:any,activite:any):Observable<any>{
    const data:FormData=new FormData();

    const user=[{"login":login,"password":password}]
    data.append('file',file);
    //data.append('data',activite);
    console.log(activite)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('data', JSON.stringify(activite).slice(1,JSON.stringify(activite).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/new`,data);
  }
}
