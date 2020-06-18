import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  error: string;
  private destroy$ = new Subject();

  constructor(private service: LoginService,  private router: Router) {}

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
      this.service.loginUser(email, password).pipe(
        takeUntil(this.destroy$))
        .subscribe(() => this.router.navigate(['weather']),
        error => {this.error = error.error.message; });
    } else {
      this.service.registerUser(email, password).pipe(
        takeUntil(this.destroy$))
        .subscribe(() => this.router.navigate(['weather']),
        error => {this.error = error.error.message; });
    }

    form.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
