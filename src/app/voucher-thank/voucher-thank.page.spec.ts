import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherThankPage } from './voucher-thank.page';

describe('VoucherThankPage', () => {
  let component: VoucherThankPage;
  let fixture: ComponentFixture<VoucherThankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherThankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherThankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
