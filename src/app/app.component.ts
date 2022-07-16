import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultValue = 'advanced';
  @ViewChild('f') signupForm!: NgForm;
  submited = false;

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
