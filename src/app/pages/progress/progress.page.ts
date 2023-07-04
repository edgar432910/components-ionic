import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  percent:number = 0.05;

  constructor() { }

  ngOnInit() {
  }
  rangeChange(event: any): void {
    console.log(event.detail.value);
    event.detail.value;
    this.percent= event.detail.value/100;
  }

}
