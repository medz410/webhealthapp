import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'navigation-web',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
appName = 'Health Care';
menuList:any[]=[];
  constructor(private router: Router) {
    this.menuList = [
      {
       'name':'Login',
       'link':'login'
      }, {
          'name':'Patient Health Profile',
          'link':'healthcare'
      }, {
          'name':'Clinic Dashboard',
          'link':'clinical-dashboard'
       }
    ]
   }

  ngOnInit() {
  }
  onnavigateLink(item:any) {
    debugger;
    this.router.navigate([item.link]);
  }
}
