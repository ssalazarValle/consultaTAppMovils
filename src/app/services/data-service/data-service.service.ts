import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private detailOperation: [];
  private filtersObject: {};
  private filters: [];
  constructor() { }

  setfilters(filters: []) {
    this.filters =  filters;
  }

  getFilters() {
    return this.filters;
  }

  steFindFilters(filters: {}) {
    this.filtersObject = filters;
  }

  getFindFilters() {
    return this.filtersObject;
  }

  setDetail(detail: any ) {
    this.detailOperation = detail;
  }

  getDetails() {
    return this.detailOperation;
  }
}
