import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { StoresListComponent } from './pages/stores-list/stores-list.component';
import { StoresResolver } from './resolvers/stores.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/control-panel',
    pathMatch: 'full',
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent,
    resolve: {
      stores: StoresResolver,
    },
  },
  {
    path: 'stores-list',
    component: StoresListComponent,
    resolve: {
      stores: StoresResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
