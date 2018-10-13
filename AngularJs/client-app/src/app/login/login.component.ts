import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'eslab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.userLogin();
  }

  userLogin(): void {
    this.loading = true;
    var data = {
      "UserName": this.f.userName.value,
      "Password": this.f.password.value
    };

    this.httpService.httpPost('api/users/UserLogin', data).subscribe(data => {
      this.loading = false;
      if (data != null) {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['dashboard']);
      }
      else {
        this.error = true;
      }
    });
  }
}
