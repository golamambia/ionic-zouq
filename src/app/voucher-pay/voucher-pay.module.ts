import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherPayPageRoutingModule } from './voucher-pay-routing.module';

import { VoucherPayPage } from './voucher-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherPayPageRoutingModule
  ],
  declarations: [VoucherPayPage]
})
export class VoucherPayPageModule {}
