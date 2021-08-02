import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.css'],
})
export class StoreTableComponent implements OnInit {
  @Input() stores = [
    {
      storeName: 'a',
      storeDescription: 'b',
      storeLogo: 'c',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
