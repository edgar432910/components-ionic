import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci:Date = new Date();
  customPickerOptions ={
    buttons:[
      {text:'hola'},
      {text:'Mundo'},
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event:any){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
  confirm(event:any){}
  reset(event:any){}
}
