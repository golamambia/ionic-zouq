import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftVoucherPage } from './gift-voucher.page';

describe('GiftVoucherPage', () => {
  let component: GiftVoucherPage;
  let fixture: ComponentFixture<GiftVoucherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftVoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftVoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
