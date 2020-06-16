import {
  Component,
  ViewChild,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { PlaceholderDirective } from '../../../shared/placeholder/placeholder.directive';
@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  // @ViewChild(PlaceholderDirective, { static: false })
  // alertHost: PlaceholderDirective;

  constructor() {}

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
     console.log('login');
    } else {
      console.log('sign in');
    }

    form.reset();
  }
}
