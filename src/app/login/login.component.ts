import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'ons-page[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navigator: OnsNavigator) { }

  ngOnInit() {
  }

  login(){
    this.navigator.element.replacePage(DashboardComponent);
  }

}
