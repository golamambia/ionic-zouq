import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherOrderlistPage } from './voucher-orderlist.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherOrderlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherOrderlistPageRoutingModule {}
