import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable()
export class PageService extends ApiService {

  constructor(protected http: Http, protected loaderService: LoaderService) {
    super(http, loaderService);
  }

  getPages() {
    return this.get('pages');
  }

}
