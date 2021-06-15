import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherFailPage } from './voucher-fail.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherFailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherFailPageRoutingModule {}
