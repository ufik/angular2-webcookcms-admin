import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable()
export class LoginService extends ApiService {

  constructor(protected http: Http, protected loaderService: LoaderService) {
    super(http, loaderService);
  }

  public login(username: string, password: string) {
    return this.post('login_check', {_username: username, _password: password});
  }
}
