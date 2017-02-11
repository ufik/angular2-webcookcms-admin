import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './api.service';

@Injectable()
export class PageService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  getPages() {
    return this.get('pages');
  }

}
