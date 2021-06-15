import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherPayPage } from './voucher-pay.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherPayPageRoutingModule {}
