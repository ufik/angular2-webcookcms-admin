import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { BaseComponent } from '../base.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent {
  rows: any;
  selected: any;

  constructor(private userService: UserService, protected router: Router) {
    super(router);
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => this.rows = response);
  }

  delete(id) {
    this.userService.deleteUser(id).subscribe(response => this.afterDelete());
  }

  afterDelete() {

  }
}
