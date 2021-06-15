import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftVoucherPageRoutingModule } from './gift-voucher-routing.module';

import { GiftVoucherPage } from './gift-voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftVoucherPageRoutingModule
  ],
  declarations: [GiftVoucherPage]
})
export class GiftVoucherPageModule {}
