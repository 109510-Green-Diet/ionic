import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FDetailPageRoutingModule } from './f-detail-routing.module';

import { FDetailPage } from './f-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FDetailPageRoutingModule
  ],
  declarations: [FDetailPage]
})
export class FDetailPageModule {}
