import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { StoresListComponent } from './pages/stores-list/stores-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/control-panel',
    pathMatch: 'full',
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent,
  },
  {
    path: 'stores-list',
    component: StoresListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
