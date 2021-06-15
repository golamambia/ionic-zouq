import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
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
pickup_delivery:any;
 public datap: any = {
    paytyp: ''
  };
public dtime: any = {
    paytyp: 'soon'
  };
  uba_delivery_date:any;
  uba_delivery_date2:any;
  uba_delivery_time:any;
  uba_delivery_time2:any;
  voucher_amt:any=0;
  use_voucher:any='';
  use_voucher_check:any=0;
constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController,public toastController: ToastController) { 
  this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        //console.log(val);
    }
        });
  }
  
  ngOnInit() {
  }
onChangeHandler($event) {
    this.datap.paytyp = $event.target.value;
    this.paymentmode=$event.target.value;
    //console.log(this.paymentmode);
  }
onChangeHandler2($event) {
    this.dtime.paytyp = $event.target.value;
   this.pickup_delivery=$event.target.value;
    //console.log(this.paymentmode);
  }
  onChangeHandler3($event) {
   
    //console.log(this.use_voucher);
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
this.listing();
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
		//console.log(this.res);
    this.voucher_amt=this.res.voucher_amount;
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
  selectDeliveryAddress(idx){

  	this.currentSelected = idx;
  }
  async book_order(){
    //console.log(this.voucher_amt);
  	const loading = await this.loadingController.create({
    message: 'Processing...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const addrsalert = await this.alertController.create({
     message: 'Please select address',
      buttons: ['OK']
    });
const useralert = await this.alertController.create({
     message: 'Please login',
      buttons: ['OK']
    });
const paymodealert = await this.alertController.create({
     message: 'Please select payment type',
      buttons: ['OK']
    });
const deldatealert = await this.alertController.create({
     message: 'Please select delivery date',
      buttons: ['OK']
    });
const timealert = await this.alertController.create({
     message: 'Please select delivery time',
      buttons: ['OK']
    });
if(this.pickup_delivery=='later'){
this.uba_delivery_date=this.uba_delivery_date2;
this.uba_delivery_time=this.uba_delivery_time2;
  }else{
    this.uba_delivery_date='';
    this.uba_delivery_time='';
  }
var headers = new Headers();
if(this.currentSelected == null){
		 
		loading.dismiss();
		addrsalert.present();
	}else if(this.userDetails == '' || this.userDetails == null){
	loading.dismiss();
	useralert.present();
		
	}else if(this.pickup_delivery == 'later' && this.uba_delivery_date2 == null){
  loading.dismiss();
  deldatealert.present();
    
  }else if(this.pickup_delivery == 'later' && this.uba_delivery_time2 == null){
  loading.dismiss();
  timealert.present();
    
  }else if(this.use_voucher != '' && this.voucher_amt<this.cartTotalAmount && (this.paymentmode == ''|| this.paymentmode == null)){
//console.log(1);

  loading.dismiss();
  paymodealert.present();
  

}else if(this.use_voucher == '' && (this.paymentmode == '' || this.paymentmode == null)){
//console.log(2);

   loading.dismiss();
  paymodealert.present();

}else{
    await loading.present();
if(this.paymentmode == 'online'){
this.navCtrl.navigateForward('checkout-online?address='+this.currentSelected+'&use_voucher='+this.use_voucher);
loading.dismiss();
}else{
	
	var data ={
		"cartTotalAmount": this.cartTotalAmount,
		"userid": this.userDetails.user_id,
		"name": this.userDetails.user.name,
		"order_method":'delivery',
		"paymod":this.paymentmode,
		"deliver_address":this.currentSelected,
		"phone":this.userDetails.user.phone,
		"pickup_delivery":this.dtime.paytyp,
    "uba_delivery_date":this.uba_delivery_date,
    "uba_delivery_time":this.uba_delivery_time,
    "use_voucher":this.use_voucher,
		"cart_data":this.cart_data,
		
	}
this.http.post(this.bookUrl, data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		this.navCtrl.navigateForward('order-failed');
		
		}else if(this.res.status == 1){
      this.storage.remove("userCart");
				this.currentSelected=null;
        this.use_voucher='';
		this.navCtrl.navigateForward('order-success');
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});
}

}
  }
  edit(id){
	
		this.navCtrl.navigateForward('/checkout-addressedit?edit='+id);
		
	}
  back(){
  	this.navCtrl.navigateForward('cart-page');
  }
}
