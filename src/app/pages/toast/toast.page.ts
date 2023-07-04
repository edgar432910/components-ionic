import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  isToastOpen = false;
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1000,
      position,
    });

    await toast.present();
  }
}
