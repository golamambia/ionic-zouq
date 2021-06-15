import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherFailPage } from './voucher-fail.page';

describe('VoucherFailPage', () => {
  let component: VoucherFailPage;
  let fixture: ComponentFixture<VoucherFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
