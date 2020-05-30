import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HDetailPage } from './h-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HDetailPageRoutingModule {}
