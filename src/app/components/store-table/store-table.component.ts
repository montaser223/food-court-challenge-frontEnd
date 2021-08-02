import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.css'],
})
export class StoreTableComponent implements OnInit {
  @Input() stores = [{
    storeName: '',
    storeDescription: '',
    storeLogo: '',
  }];
  constructor() {}

  ngOnInit(): void {
    console.log(this.stores);
  }
}
