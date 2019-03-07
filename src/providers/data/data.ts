import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiURL = "http://103.207.1.123/PHP-Slim-Restful/api/";

@Injectable()
export class DataProvider {


  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  postCheck(credentials, type){
      return new Promise((resolve, reject)=>{
        let headers = new HttpHeaders();
        this.http.post(apiURL+type, JSON.stringify(credentials), {headers: headers}).
         subscribe(data =>{
           resolve(data);
           console.log(data);
        },(err)=>{
          reject(err);
        });
      });

  }

  feedAccept(credentials, type){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiURL+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(data =>{
        resolve(data);
        console.log(data);
      },(err)=>{
        reject(err);
      });

    });
  }
  feedReject(credentials, type){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiURL+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(data =>{
        resolve(data);
        console.log(data);
      },(err)=>{
        reject(err);
      });

    });
  }

  feedPostpone(credentials, type){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiURL+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(data =>{
        resolve(data);
        console.log(data);
      },(err)=>{
        reject(err);
      });

    });
  }

  loadData(type){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.get(apiURL+type, {headers: headers}).
      subscribe(res =>{
       resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }
}




