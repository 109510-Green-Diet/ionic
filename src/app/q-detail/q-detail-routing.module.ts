import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QDetailPage } from './q-detail.page';

const routes: Routes = [
  {
    path: '',
    component: QDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QDetailPageRoutingModule {}
