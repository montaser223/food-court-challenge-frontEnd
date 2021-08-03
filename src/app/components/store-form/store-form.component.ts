import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css'],
})
export class StoreFormComponent implements OnInit {
  store = {
    storeName: '',
    storeDescription: '',
    storeLogo: '',
  };
  storeLogo: any;
  constructor() {}

  ngOnInit(): void {}

  submit(form: any) {
    console.log(form);
  }

  handleLogoChange(event: any) {
    this.storeLogo = event.target.files[0];
  }
}
