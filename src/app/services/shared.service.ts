import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppConfig } from '../config/app.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private firestore: AngularFirestore, private http: HttpService) {}
  
  test() {
    return true;
  }

  registerExperts(payload: any) {
    payload.id = this.firestore.createId();
    delete payload.captcha;
    return this.firestore.collection(AppConfig.collections.expert).add(payload);
  }

  testData() {
    return this.http.get('https://reqres.in/api/users');
  }
}
