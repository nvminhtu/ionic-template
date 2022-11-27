import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {
  ionicForm: FormGroup | any;
  // inject the FormBuilder Service into the constructor
  constructor(public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob:  ['', Validators.required],
    });
  }

  ngOnInit() {}

  getDate() {
    let date = new Date().toISOString().substring(0,10);
    // setValue cho field
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
   })
  }
  submitForm() {
    console.log(this.ionicForm.value);
  }
}
