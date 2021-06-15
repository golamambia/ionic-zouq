import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherPayPage } from './voucher-pay.page';

describe('VoucherPayPage', () => {
  let component: VoucherPayPage;
  let fixture: ComponentFixture<VoucherPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
