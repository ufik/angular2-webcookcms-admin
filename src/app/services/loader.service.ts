import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LoaderService {
  private counter: number = 0;
  private requestsNumberSource = new Subject<number>();

  activeRequests$ = this.requestsNumberSource.asObservable();

  announceRequest() {
    this.counter++;
    this.requestsNumberSource.next(this.counter);
  }

  announceFinishedRequest() {
      this.counter--;
      this.requestsNumberSource.next(this.counter);
  }
}
