import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { LoaderService } from './loader.service';
import {MdSnackBar} from '@angular/material';

export abstract class ApiService {
  private token: string;
  private baseUrl: string = environment.apiUrl;

  constructor(protected http: Http, protected loaderService: LoaderService) {}

  protected post(url: string, data: Object): Observable<any> {
    return this.http.post(this.baseUrl + url, data, this.getRequestOptions())
              .map(response => {
                  this.loaderService.announceFinishedRequest();
                  this.extractData(response);
              })
              .catch(error => {
                  this.loaderService.announceFinishedRequest();
                  return this.handleError(error);
              });
  }

  protected get(url): Observable<any> {
      return this.http.get(this.baseUrl + url + '.json', this.getRequestOptions())
              .map(response => {
                  this.loaderService.announceFinishedRequest();
                  return this.extractData(response);
              })
              .catch(error => {
                  this.loaderService.announceFinishedRequest();
                  return this.handleError(error);
              });
  }

  protected put(url, data): Observable<any> {
    return this.http.put(this.baseUrl + url + '.json', data, this.getRequestOptions())
              .map(response => {
                this.loaderService.announceFinishedRequest();
                this.extractData(response);
              })
              .catch(error => {
                this.loaderService.announceFinishedRequest();
                return this.handleError(error);
              });
  }

  protected delete(url): Observable<any> {
    return this.http.delete(this.baseUrl + url, this.getRequestOptions())
              .map(response => {
                  this.loaderService.announceFinishedRequest();
                  this.extractData(response);
                })
              .catch(error => {
                  this.loaderService.announceFinishedRequest();
                  return this.handleError(error);
              });
  }

  private getRequestOptions() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });

    this.loaderService.announceRequest();

    return new RequestOptions({ headers: headers });
  }

  public setToken(token: string) {
    this.token = token;
  }

  protected extractData(res: Response) {
    return res.json();
  }

  /**
   * TODO: Refactor
   */
  protected handleError(error: Response | any) {
    let errMsg: string;

    this.loaderService.announceFinishedRequest();

    if (error instanceof Response) {
      console.log(error);
      const body = error.json() || '';
      const err = body.message || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  protected parseResponse(response: Response) {
    return response.json();
  }

}
