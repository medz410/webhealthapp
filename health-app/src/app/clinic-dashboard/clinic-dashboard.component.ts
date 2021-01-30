import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'clinic-dashboard',
  templateUrl: './clinic-dashboard.component.html',
  styleUrls: ['./clinic-dashboard.component.scss']
})
export class ClinicDashboardComponent implements OnInit {
  
  constructor(private router: Router,private _httpClient: HttpClient) {
   
   }

  ngOnInit() {
  }
 
}
