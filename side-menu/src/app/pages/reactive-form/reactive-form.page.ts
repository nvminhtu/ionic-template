import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { throws } from 'assert';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {
  ionicForm: FormGroup | any;
  defaultDate: string = '1987-06-30';
  isSubmitted: boolean = false;
  // inject the FormBuilder Service into the constructor
  constructor(public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  ngOnInit() {}
  getDate(e: any) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true,
    });
  }

  getMonth() {
    let month = new Date().getMonth().toString();
    this.ionicForm.get('name').setValue(month, {
      onlyself: true,
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      return true;
    }
  }
}
