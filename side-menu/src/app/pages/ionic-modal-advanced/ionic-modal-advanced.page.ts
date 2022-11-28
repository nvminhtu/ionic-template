import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastModalPage } from 'src/app/modals/toast-modal/toast-modal.page';

@Component({
  selector: 'app-ionic-modal-advanced',
  templateUrl: './ionic-modal-advanced.page.html',
  styleUrls: ['./ionic-modal-advanced.page.scss'],
})
export class IonicModalAdvancedPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ToastModalPage,
      breakpoints: [0, 0.3],
      initialBreakpoint: 0.3,
      cssClass: 'custom-modal',
      handle: false,
    });

    await modal.present();

    setTimeout(() => {
      modal.dismiss();
    }, 2000);
  }
}
