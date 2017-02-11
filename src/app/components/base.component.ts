import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

export abstract class BaseComponent {
  constructor(protected router: Router) {}
}
