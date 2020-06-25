import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { KEY_STORAGE } from '../../../environments/environment';
import { DbProvider } from '../DbProvider/db-provider.service';

@Injectable({
  providedIn: 'root'
})
export class MethodsHttpService {

  constructor(
    public http: HttpClient,
    public nativeStorage: DbProvider
  ) { }

  httpGet(url: string, objHeaders?): Observable<any> {
    return from(this.getLoadParam(KEY_STORAGE.TOKEN)).pipe(flatMap((token: any) => {
      let headers = new HttpHeaders({
        Authorization: `Bearer ${token.value}`
      });
      if (objHeaders) {
        Object.keys(objHeaders).forEach((key) => {
          headers = headers.append(key, objHeaders[key]);
        });
      }
      return this.http.get<any>(url, {
        headers
      });
    }));
  }

  httpGetQueryString(url: string): Observable<any> {
    return from(this.getLoadParam(KEY_STORAGE.TOKEN)).pipe(flatMap((token: any) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token.value}`
      });
      return this.http.get<any>(url, {
        headers
      });
    }));
  }

  httpPost(url: string, body: any, objHeaders?): Observable<any> {
    return from(this.getLoadParam(KEY_STORAGE.TOKEN)).pipe(flatMap((token: any) => {
      let headers = new HttpHeaders({
        Authorization: `Bearer ${token.value}`
      });
      if (objHeaders) {
        Object.keys(objHeaders).forEach((key) => {
          headers = headers.append(key, objHeaders[key]);
        });
      }
      return this.http.post<any>(url, body, {
        headers
      });
    }));
  }

  httPostAut(url: string, body: any, objHeaders?): Observable<any> {
    return from(this.getLoadParam(KEY_STORAGE.TOKEN)).pipe(flatMap((token: any) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      if (objHeaders) {
        Object.keys(objHeaders).forEach((key) => {
          headers = headers.append(key, objHeaders[key]);
        });
      }
      return this.http.post<any>(url, body, {
        headers
      });
    }));
  }

  httpPut(url: string, body: any, objHeaders?): Observable<any> {
    return from(this.getLoadParam(KEY_STORAGE.TOKEN)).pipe(flatMap((token: any) => {
      let headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      if (objHeaders) {
        Object.keys(objHeaders).forEach((key) => {
          headers = headers.append(key, objHeaders[key]);
        });
      }
      return this.http.put<any>(url, body, {
        headers
      });
    }));
  }

  async getLoadParam(key) {
    return await this.nativeStorage.get(key);
  }
}
