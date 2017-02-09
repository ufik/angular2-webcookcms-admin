import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { BaseComponent } from '../base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends BaseComponent {
  private username: string = '';
  private password: string = '';
  private error: string    = '';

  constructor(private loginService: LoginService, protected router: Router) {
    super(router);

    this.loginService.setToken('');
  }

  onSubmit() {
    this.error = '';
    this.loginService.login(this.username, this.password).subscribe(
                       response => this.parseResponse(response),
                       error => this.error = error);
  }

  protected parseResponse(response: any) {
    this.loginService.setToken(response.token);

    this.router.navigate(['/dashboard']);
  }

}
