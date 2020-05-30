import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QDetailPageRoutingModule } from './q-detail-routing.module';

import { QDetailPage } from './q-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QDetailPageRoutingModule
  ],
  declarations: [QDetailPage]
})
export class QDetailPageModule {}
