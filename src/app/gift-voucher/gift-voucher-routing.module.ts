import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftVoucherPage } from './gift-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: GiftVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftVoucherPageRoutingModule {}
