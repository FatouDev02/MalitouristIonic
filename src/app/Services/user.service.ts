import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../userr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  env=environment;

  constructor(public http:HttpClient) { 

  }
        addUser(user:User):Observable<any>{
          return this.http.post(`${this.env.api}/ApiTourist/user/addusser/`,user);
      }
    
    login(username:String,password:String):Observable<any>{

      console.log(username)
      console.log(password)
      var utilisateur={
        "username":username,
        "password":password
      }
      return this.http.post(`${this.env.api}/login`,utilisateur);
    }

}
