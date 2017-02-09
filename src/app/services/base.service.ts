import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

export abstract class BaseService {
  private token: string;
  private baseUrl: string = 'http://webcook-cms/app_dev.php/api/';

  constructor(protected http: Http) {}

  protected post(url: string, data: Object): Observable<any> {
    return this.http.post(this.baseUrl + url, data, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError);
  }

  protected get(url): Observable<any> {
      return this.http.get(this.baseUrl + url + '.json', this.getRequestOptions())
                .map(this.extractData)
                .catch(this.handleError)
  }

  private getRequestOptions() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});

    return new RequestOptions({ headers: headers });
  }

  public setToken(token: string) {
    this.token = token;
  }

  protected extractData(res: Response) {
    return res.json();
  }

  protected handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
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
