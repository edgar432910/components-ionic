import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingReorderPage } from './loading-reorder.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingReorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingReorderPageRoutingModule {}
