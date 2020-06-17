import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;

  constructor(private service: LoginService) {}

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      this.service.loginUser(email, password);
      console.log('login');
    } else {
      this.service.registerUser(email, password);
      console.log('sign in');
    }

    form.reset();
  }
}
