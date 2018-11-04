import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'eslab-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  confirmPasswordError = false;
  success = false;
  error = false;

  @Input() source: string;
  
  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',],
      phone: ['', Validators.required],
      email: ['', Validators.required,]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let password = this.registerForm.controls.password.value;
    let repeatPassword = this.registerForm.controls.confirmPassword.value;

    if (password != repeatPassword) {
      this.confirmPasswordError = true;
      return;
    }
    else {
      this.confirmPasswordError = false;
    }

    this.registerUser();
  }

  registerUser(): void {

    this.loading = true;
    var data = {
      "Name": this.f.name.value,
      "UserName": this.f.userName.value,
      "Password": this.f.password.value,
      "Phone": this.f.phone.value,
      "Email": this.f.email.value
    };

    this.checkIfUserExistsAndRegister(data);
  }

  checkIfUserExistsAndRegister(data: any) {
    var param = {
      "UserName": data.Name,
      "Email": data.Email
    };

    this.httpService.httpPostPromise('api/users/CheckIfExists', data).then(res => {
      if (res != null && res != true) {
        this.addUser(data);
      }
      else {
        this.loading = false;
        this.error = true;
      }
    });
  }

  addUser(data: any): void {
    this.httpService.httpPost('api/users/adduser?userRole=3', data).subscribe(data => {
      this.loading = false;
      this.success = true;
    });
  }

}