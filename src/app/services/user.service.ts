import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {

  constructor(protected http: Http) {
    super(http);
  }

  getUsers() {
    return this.get('users');
  }
}
