import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginResult } from '../interfaces/interfaces';
import { map, tap,catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) {}
  login(email:string,password:string){
    const url ='mYURL'
    const body ={email,password}
    return this.http.post<ILoginResult>(url,body)
    .pipe(
      tap(resp=>{
        console.log(resp);
        
        if (resp.loginSuccessful) {
          
        }
      }),
      map(resp=>resp.loginSuccessful),
      catchError(err=>of(err.error.msg))
      //con el off convertimos el valor a observable
    )

  }
}
