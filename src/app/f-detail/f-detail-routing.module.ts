import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FDetailPage } from './f-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FDetailPageRoutingModule {}
