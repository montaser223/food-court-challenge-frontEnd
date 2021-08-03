import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '../interfaces/stores';
@Injectable({
  providedIn: 'root',
})
export class StoresService {
  storesUrl: string = environment.apiUrl + 'stores';
  constructor(private _http: HttpClient) {}

  getAllStores() {
    return this._http.get<Store[]>(this.storesUrl);
  }
}
