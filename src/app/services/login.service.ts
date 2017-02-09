import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';

import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {

  constructor(protected http: Http) {
    super(http);
  }

  public login(username: string, password: string) {
    return this.post('login_check', {_username: username, _password: password});
  }
}
