import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css'],
})
export class StoreCardComponent implements OnInit {
  @Input() store = {
    storeName: 'Card title',
    storeDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    storeLogo: 'assets/images/default.jpg',
  };
  constructor() {}

  ngOnInit(): void {}
}
