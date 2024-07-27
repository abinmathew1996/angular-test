import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  async setLocalStorage(key: any, data: any) {
    data = JSON.stringify(data);
    await localStorage.setItem(key, data);
  }
  getLocalStorage(key: any): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  constructor() {}
}
