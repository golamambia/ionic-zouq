import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherOrderlistPageRoutingModule } from './voucher-orderlist-routing.module';

import { VoucherOrderlistPage } from './voucher-orderlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherOrderlistPageRoutingModule
  ],
  declarations: [VoucherOrderlistPage]
})
export class VoucherOrderlistPageModule {}
