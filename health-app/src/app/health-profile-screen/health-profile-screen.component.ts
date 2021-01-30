import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-health-profile-screen',
  templateUrl: './health-profile-screen.component.html',
  styleUrls: ['./health-profile-screen.component.css']
})
export class HealthProfileScreenComponent implements OnInit {

  medicalConditionData:any[]=[];
  patientModel:PatientModel;
  patientlist:any[]=[];
  constructor(private router: Router,private _httpClient: HttpClient) {
    this.patientModel = new PatientModel();
    this.medicalConditionData = [
      {
       'label':'Heart disease',
       'id':'heart1',
       'value':false
      }, {
        'label':'Low/High BP',
        'id':'bp2',
        'value':false
      }, {
          'label':'Eye surgery',
          'id':'eye3',
          'value':false
       },
       {
        'label':'Diabetes',
        'id':'diabetes4',
        'value':false
     }
    ]
   }

  ngOnInit() {
    this.fetchPatientData();
  }
  getPatientInfo(item) {
this.patientModel = JSON.parse(JSON.stringify(item));
if(item.medicalConditionArray.length > 0) {
  item.medicalConditionArray.forEach(item => {
    this.medicalConditionData.forEach(item2 => {
      if(item === item2.id) {
        item2.value = true;
      }
    });
  });
  this.medicalConditionData = JSON.parse(JSON.stringify(this.medicalConditionData));
}
  }
  fetchPatientData() {
    debugger;
    let response:any;
    this._httpClient.get('/assets/data/patientdata.json').subscribe(
      (res: any) => {
        response = res;
      },
      (error: any) => {
      },
      () => {
        if (response) {
          this.patientlist = response.data;
        }
        }
    );
  }
  nextPageClick() {
    this.router.navigate(['']);
  }
}
export class PatientModel {
  name: string;
  age: string;
  bp:string;
  height:string;
  weight:string;
  medicalConditionArray:any[];
  pluserate:string;
   constructor() {
     this.bp = '';
     this.weight = '';
     this.height = '';
     this.pluserate = '';
     this.name = '';
     this.age = '';
     this.medicalConditionArray = [];
   }

}
