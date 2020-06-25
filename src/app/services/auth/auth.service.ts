import { MethodsHttpService } from './../methods-http/methods-http.service';
import { Injectable } from '@angular/core';
import { DbProvider } from '../DbProvider/db-provider.service';
import { map } from 'rxjs/operators';
import { URL_SERVERLOGIN } from 'src/app/enviroments/endpoinds';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private methodsHtttp: MethodsHttpService,
    public nativeStorage: DbProvider,
  ) { }

  login(BODY) {
    return this.methodsHtttp.httPostAut(URL_SERVERLOGIN, BODY).pipe(map((resp) => {
      const token = 'token';
      console.log('ttoken: ', resp)
      this.nativeStorage.set(token, resp);
      return resp.value;
    }), (err) => {
      return err;
    });
  }

}
