import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherFailPageRoutingModule } from './voucher-fail-routing.module';

import { VoucherFailPage } from './voucher-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherFailPageRoutingModule
  ],
  declarations: [VoucherFailPage]
})
export class VoucherFailPageModule {}
