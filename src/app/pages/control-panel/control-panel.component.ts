import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from 'src/app/services/stores.service';
import { manipulateSearchParams } from '../../services/handle-search-params.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
})
export class ControlPanelComponent implements OnInit, OnDestroy {
  stoersList: any;
  page: number = 1;
  totalDocs: number = 0;
  subscriber: any;
  searchQuery: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private services: StoresService
  ) {}

  ngOnInit(): void {
    this.subscriber = this.activatedRoute.data.subscribe({
      next: (res) => {
        this.stoersList = res['stores']['data']['docs'];
        this.page = res['stores']['data']['page'];
        this.totalDocs = res['stores']['data']['totalDocs'];
      },
      error: (err) => console.log(err.message),
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  handlePageChane($event: any): void {
    const queryParams = manipulateSearchParams({
      page: $event,
      storeName: this.searchQuery,
    });
    this.getAllStores(queryParams);
  }

  search($event: any): void {
    this.searchQuery = $event;
    const queryParams = manipulateSearchParams({
      page: 1,
      storeName: $event,
    });
    this.getAllStores(queryParams);
  }

  getAllStores(queryParams: string): void {
    this.services.getAllStores(queryParams).subscribe({
      next: (res) => {
        this.stoersList = res['data']['docs'];
        this.page = res['data']['page'];
        this.totalDocs = res['data']['totalDocs'];
      },
      error: (err) => console.log(err.message),
    });
  }
}
