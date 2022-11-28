import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.page.html',
  styleUrls: ['./update-modal.page.scss'],
})
export class UpdateModalPage implements OnInit {
  choice = 0;
  @Input() paymentName!: BehaviorSubject<string>;
  choices = [
    'Credit Card',
    'Paypal',
    'Bank transfer'
  ];


  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const preselect = this.paymentName.value;
    this.choice = this.choices.indexOf(preselect);
  }

    // Change the choice and update the Subject
  changeChoice(num:number) {
    this.choice = num;
    this.paymentName.next(this.choices[num]);
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
