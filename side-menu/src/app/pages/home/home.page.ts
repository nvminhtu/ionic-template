import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// 01- Bottom Sheet
import { SimpleModalPage } from 'src/app/modal/simple-modal/simple-modal.page';

// 02- Bottom Sheet Modal - update data (pass data from modal)
import { BehaviorSubject } from 'rxjs';
import { UpdateModalPage } from 'src/app/modal/update-modal/update-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  choice = 'Credit card';
  mySubject = new BehaviorSubject(this.choice);

  constructor(private modalCtrl: ModalController) { }

  // Bottom Sheet Modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.7
    });

    await modal.present();
  }
  
  // 02- Bottom Sheet Modal - update data (pass data from modal)
  async presentPassModal(){
    const modal = await this.modalCtrl.create({
    component: UpdateModalPage,
      breakpoints: [0, 0.2],
      initialBreakpoint: 0.5,
      handle: false,
      componentProps: {
        paymentName : this.mySubject
      },
    });
    await modal.present();

    this.mySubject.subscribe((value: string) => {
      this.choice = value;
    });

    modal.onDidDismiss().then((_ => {
      // can cause to Memory Leak
      // this.mySubject.unsubscribe();
    }));
  }

  ngOnInit() {
  }

}
