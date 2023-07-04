import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingReorderPageRoutingModule } from './loading-reorder-routing.module';

import { LoadingReorderPage } from './loading-reorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingReorderPageRoutingModule
  ],
  declarations: [LoadingReorderPage]
})
export class LoadingReorderPageModule {}
