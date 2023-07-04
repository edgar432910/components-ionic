import { Component, OnInit } from '@angular/core';
import { IComponentes } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  componentes!:Observable<IComponentes[]>;
  constructor(private dataService:DataService, private menuCtrl: MenuController) {}
  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts()

  }
}
