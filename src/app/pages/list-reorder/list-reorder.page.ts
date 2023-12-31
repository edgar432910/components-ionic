import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla']
  isDisableToggle = false;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {

    const itemMoved = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMoved);


    event.detail.complete();
    console.log(this.personajes)
  }
  onChangeToggle() {
    this.isDisableToggle = !this.isDisableToggle;

  }
}
