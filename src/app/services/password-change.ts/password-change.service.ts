import { Injectable } from '@angular/core';
import { MethodsHttpService } from '../methods-http/methods-http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeService {

  constructor(
    private methodsHttp: MethodsHttpService
  ) { }

  changePasswordNR() {
    const url = '';
    const body = '';
    return this.methodsHttp.httpPost(url, body).pipe(map( (response) => {
      return response.value;
    }, (error) => {
      return error;
    }));
  }

  changePasswordIN() {
    const url = '';
    const body = '';
    return this.methodsHttp.httpPost(url, body).pipe(map( (response) => {
      return response.value;
    }, (error) => {
      return error;
    }));
  }

  changePassword() {
    const url = '';
    const body = '';
    return this.methodsHttp.httpPost(url, body).pipe(map( (response) => {
      return response.value;
    }, (error) => {
      return error;
    }));
  }

}
