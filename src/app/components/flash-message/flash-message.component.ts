import { Component, Input } from '@angular/core';
import { FlashMessage } from '../../models/flash-message'; 

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent {
  private message: FlashMessage;

  public setMessage(message: FlashMessage) {
    this.message = message;
  }
}
