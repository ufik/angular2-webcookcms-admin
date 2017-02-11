import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Router } from '@angular/router';

import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  pages: any;

  constructor(private pageService: PageService, protected router: Router) {
    super(router);
  }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pageService.getPages().subscribe(response => this.pages = response);
  }
  
}
