import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'address-add',
    loadChildren: () => import('./address-add/address-add.module').then( m => m.AddressAddPageModule)
  },
  {
    path: 'address-update',
    loadChildren: () => import('./address-update/address-update.module').then( m => m.AddressUpdatePageModule)
  },
  {
    path: 'restaurant-menu',
    loadChildren: () => import('./restaurant-menu/restaurant-menu.module').then( m => m.RestaurantMenuPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'order-failed',
    loadChildren: () => import('./order-failed/order-failed.module').then( m => m.OrderFailedPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'checkout-addressadd',
    loadChildren: () => import('./checkout-addressadd/checkout-addressadd.module').then( m => m.CheckoutAddressaddPageModule)
  },
  {
    path: 'checkout-addressedit',
    loadChildren: () => import('./checkout-addressedit/checkout-addressedit.module').then( m => m.CheckoutAddresseditPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'term-condition',
    loadChildren: () => import('./term-condition/term-condition.module').then( m => m.TermConditionPageModule)
  },
  {
    path: 'book-table',
    loadChildren: () => import('./book-table/book-table.module').then( m => m.BookTablePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'gift-voucher',
    loadChildren: () => import('./gift-voucher/gift-voucher.module').then( m => m.GiftVoucherPageModule)
  },
  {
    path: 'voucher-pay',
    loadChildren: () => import('./voucher-pay/voucher-pay.module').then( m => m.VoucherPayPageModule)
  },
  {
    path: 'voucher-thank',
    loadChildren: () => import('./voucher-thank/voucher-thank.module').then( m => m.VoucherThankPageModule)
  },
  {
    path: 'voucher-fail',
    loadChildren: () => import('./voucher-fail/voucher-fail.module').then( m => m.VoucherFailPageModule)
  },
  {
    path: 'voucher-orderlist',
    loadChildren: () => import('./voucher-orderlist/voucher-orderlist.module').then( m => m.VoucherOrderlistPageModule)
  },
  {
    path: 'checkout-online',
    loadChildren: () => import('./checkout-online/checkout-online.module').then( m => m.CheckoutOnlinePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
