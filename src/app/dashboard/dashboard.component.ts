import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  str:String = "";
  constructor() { 
    this.str = "hello world";
  }

  ngOnInit(): void {

    this.str = "b";
    this.hoge();
  }

  hoge(): void {
    this.str = "hoge";
  }

}
