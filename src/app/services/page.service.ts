import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from './base.service';

@Injectable()
export class PageService extends BaseService {

  constructor(protected http: Http) {
    super(http);
  }

  getPages() {
    return this.get('pages');
  }

}
