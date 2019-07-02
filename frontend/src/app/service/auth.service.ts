/*
@copyright : OZVID Technologies Pvt. Ltd. < www.ozvid.com >
@author     : Shiv Charan Panjeta < shiv@ozvid.com >
 
All Rights Reserved.
Proprietary and confidential :  All information contained herein is, and remains
the property of OZVID Technologies Pvt. Ltd. and its partners.
Unauthorized copying of this file, via any medium is strictly prohibited.
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootPath } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
  * service for login.
  */
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(RootPath + "login", data)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  /**
  * service for register.
  */
  register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(RootPath + "register", data)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }
}
