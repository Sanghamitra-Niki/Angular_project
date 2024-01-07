import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}

// signupUsers: any[] = [];
// signupObj: any = {
//   userName: '',
//   email: '',
//   password: '',
// };

// loginObj: any = {
//   userName: '',
//   password: '',
// };

//   constructor() {}

//   ngOnInit(): void {
//     const localData = localStorage.getItem('signupUsers');
//     if (localData != null) {
//       this.signupUsers = JSON.parse(localData);
//     }
//   }

//   onSignup() {
//     this.signupUsers.push(this.signupObj);
//     localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
//     this.signupObj = {
//       userName: ' ',
//       email: ' ',
//       password: ' ',
//     };
//     alert('User signed up successfully!');
//   }

//   onLogin() {
//     const isUserExist = this.signupUsers.find(
//       (m) =>
//         m.userName == this.loginObj.userName &&
//         m.password == this.loginObj.password
//     );

//     if (isUserExist != undefined) {
//       alert('Login Credential Successful');
//     } else {
//       alert('Wrong credential');
//     }
//   }