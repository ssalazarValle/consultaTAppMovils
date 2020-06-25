import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbProvider {

  constructor() { }

  get(key): Promise<any> {
    return Promise.resolve().then(() => {
      return JSON.parse(localStorage.getItem(key));
    });
  }

  set(key, item): Promise<any> {
    let a = JSON.stringify(item);
    return Promise.resolve().then(() => {
      localStorage.setItem(key, a);
    });
  }

  remove(key): Promise<any> {
    return Promise.resolve().then(() => {
      return localStorage.removeItem(key);
    });
  }

}
