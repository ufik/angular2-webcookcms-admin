import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../../services/user.service';
import { FlashMessageService } from '../../../services/flash-message.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private flashMessageService: FlashMessageService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.resolve(params['id']))
      .subscribe((user: any) => this.user = this.formatUser(user));
  }

  formatUser(user: any) {
    user.password = '';

    return user;
  }

  resolve(id: any) {
    if (!id || id === 'add') {
      return Promise.resolve({});
    } else {
      return this.userService.getUser(id);
    }
  }

  onSubmit() {
    if (!this.user.id) {
      this.userService.addUser(this.user).subscribe(response => this.handleResponse(response));
    } else {
      this.userService.updateUser(this.user.id, this.user).subscribe(response => this.handleResponse(response));
    }
  }

  handleResponse(response: any) {
    console.log(response);
    if (response == 'undefined') {
      this.flashMessageService.success('User has been updated.');
    } else {
      this.flashMessageService.success('New user has been created.');
    }
    

    this.router.navigate(['/users']);
  }

}
