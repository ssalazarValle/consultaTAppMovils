import { GET_MOVIMIENTOS } from './../../enviroments/endpoinds';
import { Injectable } from '@angular/core';
import { MethodsHttpService } from './../methods-http/methods-http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(
    private methodsHttp: MethodsHttpService
  ) { }

  obternerMovimientos() {
    const URL = GET_MOVIMIENTOS;
/*     return this.methodsHtpphttp.httpGet(URL).subscribe((response) => { return response }); */
    return this.methodsHttp.httpGet(URL).pipe(map(response => response));
  }


  enviarComprobantes(body) {
    const URL = GET_MOVIMIENTOS;
    return this.methodsHttp.httpPost(URL, body).pipe(map((response) => {
      return response;
    }, (err) => {
      return err;
    }));
  }
}
