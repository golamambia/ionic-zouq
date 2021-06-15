import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherThankPage } from './voucher-thank.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherThankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherThankPageRoutingModule {}
