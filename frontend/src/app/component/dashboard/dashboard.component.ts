/*
@copyright : OZVID Technologies Pvt. Ltd. < www.ozvid.com >
@author     : Shiv Charan Panjeta < shiv@ozvid.com >
 
All Rights Reserved.
Proprietary and confidential :  All information contained herein is, and remains
the property of OZVID Technologies Pvt. Ltd. and its partners.
Unauthorized copying of this file, via any medium is strictly prohibited.
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
  * function to destory local storage.
  */
  ngOnDestroy() {
    localStorage.clear();
  }

  /**
   * function to logout.
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
