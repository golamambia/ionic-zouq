import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout-online',
  templateUrl: './checkout-online.page.html',
  styleUrls: ['./checkout-online.page.scss'],
})
export class CheckoutOnlinePage implements OnInit {

 	appUrl = "https://digiworld.ie/project/zouq/api/getAddress";
	bookUrl = "https://digiworld.ie/project/zouq/api/place_order";
	res:any;
	userDetails: any;
	editid: any;
  usa_address: any;
  usa_doorno: any;
  usa_landmark: any;
  address_list:any;
  item_qty:any;
  usa_user: any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartTotalAmount:any=0;
  cartcount:any;
  count: any = 0;
  public cart = [];
public cartdata = [];
select_delivery_address:any;
paymentmode:any;
currentSelected: Number = null;
 public datap: any = {
    paytyp: 'cod'
  };
addressid:any;
  cardname: any;
cardNumber: any;
expiryMonth: any;
expiryYear: any;
cvc: any;
use_voucher:any='';
  use_voucher_check:any=0;
   voucher_amt:any=0;
    topay_amt:any=0;
constructor(public http: Http, 
	public navCtrl: NavController, 
	public storage: Storage,
	public loadingController: LoadingController,
	public alertController: AlertController,
	public toastController: ToastController,
	public route: ActivatedRoute,
	) { 
  this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        //console.log(this.userDetails);
    }
        });
  }
   ngOnInit() {
  
  }
ionViewWillEnter(){
  	// this.storage.remove("userCart");
  	
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        //this.cart_data = val;
        //console.log(val);

      }
        });
      
this.getCartItemCount();
//this.listing();
    this.route.queryParams.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.addressid=params.address;
    //console.log(this.edit_id);
    if(params.use_voucher=='true'){
      this.use_voucher='true';
        this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
          var headers = new Headers();
      this.http.post(this.appUrl+'/'+this.userDetails.user_id,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    
    this.voucher_amt=this.res.voucher_amount;
   this.topay_amt=(this.cartTotalAmount-this.voucher_amt)+2.50;
   //console.log(this.topay_amt);
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    }
        });
    // console.log(this.voucher_amt);
     
      
      
    }
  }

});
  }
  listing(){
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        var data ={
        "userId": this.userDetails.user_id,
        
  }
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl+'/'+this.userDetails.user_id,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res.voucher_amount);
    //this.voucher_amt=this.res.voucher_amount;
     if(this.res.addresses){

    this.address_list =this.res.addresses;
    
    }else{
    //alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    }
        });
  }
   getCartItemCount() {
    //let count=0;
    this.cartdata=[];
    this.cartTotalAmount=0;
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
       for (let p of this.userCart) {
            
            if (p.quantity >0) {
              this.count += 1;
              this.cartTotalAmount +=p.menu_price*p.quantity;
              this.cartdata.push(p);
            }
          }
          this.cart_data =this.cartdata;
this.cartTotal=this.count;
this.cartcount = this.count;
this.menu_list =this.cartdata;
//console.log(this.cartdata);
      }else{
this.cartTotal=this.count;
this.menu_list =this.cartdata;
      }
        });

  }
async book_order(){
  const loading = await this.loadingController.create({
    message: 'Checking...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const successalrt = await this.alertController.create({
     message: 'Thank you ',
      buttons: ['OK']
    });
const namealert = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });
const cardNumberalert = await this.alertController.create({
     message: 'Please enter card number',
      buttons: ['OK']
    });
const expiryMonthalert = await this.alertController.create({
     message: 'Please enter expiry month',
      buttons: ['OK']
    });
const expiryYearalert = await this.alertController.create({
     message: 'Please enter expiry year',
      buttons: ['OK']
    });
const cvcalert = await this.alertController.create({
     message: 'Please enter cvc no',
      buttons: ['OK']
    });


var headers = new Headers();
if(this.cardname == '' || this.cardname == null){
		 
		loading.dismiss();
		namealert.present();
	}else if(this.cardNumber == '' || this.cardNumber == null){
	loading.dismiss();
	cardNumberalert.present();
		
	}else if(this.expiryMonth == '' || this.expiryMonth == null){
	loading.dismiss();
	expiryMonthalert.present();
		
	}else if(this.expiryYear == '' || this.expiryYear == null){
	loading.dismiss();
	expiryYearalert.present();
		
	}else if(this.cvc == '' || this.cvc == null){
	loading.dismiss();
	cvcalert.present();
		
	}else{
		await loading.present();
	var data ={
		"cartTotalAmount": this.cartTotalAmount,
		"userid": this.userDetails.user_id,
		"name": this.userDetails.user.name,
		"order_method":'delivery',
		"paymod":'online',
		"deliver_address":this.addressid,
		"phone":this.userDetails.user.phone,
		"pickup_delivery":'soon',
		"cart_data":this.cart_data,
		"cardname": this.cardname,
		"cardNumber": this.cardNumber,
		"expiryMonth": this.expiryMonth,
		"expiryYear": this.expiryYear,
		"cvc": this.cvc,
    "use_voucher":this.use_voucher,
		
	}
this.http.post(this.bookUrl, data, { headers: headers })
	.subscribe(res => {
		 this.cardname='';
		 this.cardNumber='';
		 this.expiryMonth='';
		this.expiryYear='';
		this.cvc='';
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		this.navCtrl.navigateForward('order-failed');
		
		}else if(this.res.status == 1){
				this.storage.remove("userCart");
		this.navCtrl.navigateForward('order-success');
		loading.dismiss();
		}else{
			alert.present();
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		alert.present();
		loading.dismiss();
	});


}
  }

   back(){
  	this.navCtrl.navigateForward('checkout');
  }

}
