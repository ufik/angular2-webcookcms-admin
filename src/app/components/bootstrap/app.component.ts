import { Component } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { LoaderService } from '../../services/loader.service';
import { FlashMessageService } from '../../services/flash-message.service';
import { FlashMessage } from '../../models/flash-message';
import { FlashMessageComponent } from '../../components/flash-message/flash-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoading: boolean = false;
  private message;
  private messageDuration = 2000;

  constructor(
    private loaderService: LoaderService,
    private flashMessageService: FlashMessageService,
    public snackBar: MdSnackBar
    ) {

    flashMessageService.messages$.subscribe(message => this.processMessage(message));

    loaderService.activeRequests$.subscribe(
      countOfRequest => {
          this.isLoading = countOfRequest > 0;
    });
  }

  // TODO wait for previous message to dissapear
  processMessage(message: FlashMessage) {
    let sb = this.snackBar.openFromComponent(FlashMessageComponent, {
      duration: this.messageDuration
    });
    sb.instance.setMessage(message);
  }
}
