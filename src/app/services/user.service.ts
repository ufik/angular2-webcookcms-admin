import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable()
export class UserService extends ApiService {

  constructor(protected http: Http, protected loaderService: LoaderService) {
    super(http, loaderService);
  }

  getUsers() {
    return this.get('users');
  }

  getUser(id) {
    return this.get('users/' + id);
  }

  updateUser(id, data) {
    return this.put('users/' + id, data);
  }

  addUser(data) {
    return this.post('users', data);
  }

  deleteUser(id) {
    return this.delete('users/' + id);
  }
}
