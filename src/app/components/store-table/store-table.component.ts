import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/interfaces/stores';

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.css'],
})
export class StoreTableComponent implements OnInit {
  @Input() stores: Store[] = [
    {
      _id: '',
      storeName: 'a',
      storeDescription: 'b',
      storeLogo: 'c',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
