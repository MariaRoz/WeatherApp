import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule, NgForm } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const mockForm = {
  valid: true,
  value: {email: '', password: ''},
  reset() {}
} as NgForm;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ LoginComponent ],
      providers: [LoginService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change isLoginMode', () => {
    component.onSwitchMode();
    expect(component.isLoginMode).toBeFalsy();
  });

  it('should call loginUser', () => {
    component.isLoginMode = true;
    spyOn(service, 'loginUser').and.returnValue(of(''));
    component.onSubmit(mockForm);
    component.isLoginMode = true;
    expect(service.loginUser).toHaveBeenCalled();
  });

  it('should call registerUser', () => {
    component.isLoginMode = false;
    spyOn(service, 'registerUser').and.returnValue(of(''));
    component.onSubmit(mockForm);
    expect(service.registerUser).toHaveBeenCalled();
  });

});
