import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  get(url){
    return this.http.get(url);
  }
  post(url,payload){
    return this.http.post(url,payload);
  }
  put(url,payload){
    return this.http.put(url,payload);
  }
  delete(url){
    return this.http.delete(url);
  }
}
