import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HDetailPageRoutingModule } from './h-detail-routing.module';

import { HDetailPage } from './h-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HDetailPageRoutingModule
  ],
  declarations: [HDetailPage]
})
export class HDetailPageModule {}
