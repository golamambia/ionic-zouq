import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckoutOnlinePage } from './checkout-online.page';

describe('CheckoutOnlinePage', () => {
  let component: CheckoutOnlinePage;
  let fixture: ComponentFixture<CheckoutOnlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutOnlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutOnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
