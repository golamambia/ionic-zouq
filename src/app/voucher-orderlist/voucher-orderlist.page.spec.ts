import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherOrderlistPage } from './voucher-orderlist.page';

describe('VoucherOrderlistPage', () => {
  let component: VoucherOrderlistPage;
  let fixture: ComponentFixture<VoucherOrderlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherOrderlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherOrderlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
