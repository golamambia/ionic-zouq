import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherThankPageRoutingModule } from './voucher-thank-routing.module';

import { VoucherThankPage } from './voucher-thank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherThankPageRoutingModule
  ],
  declarations: [VoucherThankPage]
})
export class VoucherThankPageModule {}
