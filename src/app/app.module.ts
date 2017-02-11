import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { LoginService } from './services/login.service';
import { PageService } from './services/page.service';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { FlashMessageService } from './services/flash-message.service';
import { AppComponent } from './components/bootstrap/app.component';
import { LoginComponent } from './components/login/login.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'users', component: UserComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UserFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    UserComponent,
    UserFormComponent,
    FlashMessageComponent
  ],
  entryComponents: [
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [
    LoginService,
    PageService,
    UserService,
    LoaderService,
    FlashMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
