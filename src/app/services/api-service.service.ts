import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = "https://localhost:7147/api/";

  constructor(private _http : HttpClient) { }

  // Post Method for api service call with params
  PostService(Url:any, params:any){
    return this._http.post(this.baseUrl + Url, params);
  };

  // Get Method for api service call with params
  GetService(Url:any, params:any){
    debugger
    return this._http.get(this.baseUrl + Url, params);
  };

  //Get Method for api service call with URL
  GetServiceByURL(Url:any){
    return this._http.get(this.baseUrl + Url);
  };

  //Get Method for api service call with URL
  PutServiceByURL(Url:any, params:any){
    return this._http.put(this.baseUrl + Url, params);
  };

  //Get Method for api service call with URL
  DeleteService(Url:any, params:any){
    return this._http.delete(this.baseUrl + Url, params);
  };

}
