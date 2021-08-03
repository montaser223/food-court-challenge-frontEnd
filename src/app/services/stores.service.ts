import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  storesUrl: string = environment.apiUrl + 'stores';
  constructor(private _http: HttpClient) {}

  getAllStores(queryParams: any) {
    return this._http.get<any>(this.storesUrl + queryParams);
  }

  addNewStore(store: any) {
    return this._http.post(this.storesUrl, store);
  }

  deleteStoreById(_id: any) {
    const url = `${this.storesUrl}/${_id}`;
    return this._http.delete(url);
  }
}
