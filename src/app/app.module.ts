import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { StoreTableComponent } from './components/store-table/store-table.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';

@NgModule({
  declarations: [AppComponent, FilterComponent, StoreTableComponent, StoreCardComponent, NavbarComponent, ControlPanelComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
