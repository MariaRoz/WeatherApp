import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  isLoginMode = true;
  error: string;
  private destroy$ = new Subject();

  constructor(private service: LoginService,  private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  /**
   * We also can validating input with reactive forms but here I use template-driven forms
   */
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
        error => { this.errorHandler(error); });
    } else {
      this.service.registerUser(email, password).pipe(
        takeUntil(this.destroy$))
        .subscribe(() => this.router.navigate(['weather']),
        error => { this.errorHandler(error); });
    }

    form.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  errorHandler(error) {
    if (error.error.message) {
      this.error = error.error.message;
    } else { this.error = 'Something wrong, check server connection'; }
  }
}
