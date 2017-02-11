import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { FlashMessage } from '../models/flash-message';

@Injectable()
export class FlashMessageService {
  private messagesSource = new Subject<FlashMessage>();

  messages$ = this.messagesSource.asObservable();

  success(message: string) {
    this.messagesSource.next(this.createMessage('success', message));
  }

  info(message: string) {
    this.messagesSource.next(this.createMessage('info', message));
  }

  error(message: string) {
    this.messagesSource.next(this.createMessage('error', message));
  }

  private createMessage(type: string, message: string) {
      let flashMessage = new FlashMessage();
      flashMessage.content = message;
      flashMessage.type = type;

      return flashMessage;
  }
}
