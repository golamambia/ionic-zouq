import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-voucher-pay',
  templateUrl: './voucher-pay.page.html',
  styleUrls: ['./voucher-pay.page.scss'],
})
export class VoucherPayPage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/voucher_pay";
res:any;
userDetails: any;
voucher_list:any;
voucher_total:number=0;
voucher_total_price:number=0;
userVoucher:any;
voucher_data:any =[];
voucher_data1:any =[];
voucherTcount:number=0;
voucherTprice:number=0;
count:any=0;
countP:any=0;
btn_check:any=0;

public cartdata = [];
name: any;
cardNumber: any;
expiryMonth: any;
expiryYear: any;
cvc: any;
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {
this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        //console.log(val);
    }
        });
    
  }

ngOnInit() {
  }


  
   back(){
  
  		this.navCtrl.navigateForward('/gift-voucher');
  }
  ionViewWillEnter(){
//this.storage.remove("voucherCart");
      
       this.getCartItemCount();
       this.storage.get("voucherCart").then(val=>{
        //console.log(val);
      if(val){
        this.userVoucher = val;
        this.voucher_data1 = val;
       // console.log(this.voucher_data1);

      }else{
        this.voucher_data1 =[];
      }


        });

  }

    getCartItemCount() {
   this.count=0;
    this.countP=0;
    this.btn_check = 0;
    this.cartdata=[];
    this.storage.get("voucherCart").then(val=>{
      if(val){
       // console.log(val);
       for (let p of val) {
            
            if (p.qty >0) {
              this.count += 1;
             this.countP += p.qty*p.price;
             this.cartdata.push(p);
            }
          }
//this.cartTotal=this.count;
this.voucherTcount = this.count;
this.voucherTprice = this.countP;
this.btn_check = this.count;
      }else{
this.voucherTcount = this.count;
this.voucherTprice = this.countP;
this.btn_check =this.count;
      }
        });

  }

  async voucherPay(){
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
if(this.name == '' || this.name == null){
		 
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
		"name": this.name,
		"cardNumber": this.cardNumber,
		"expiryMonth": this.expiryMonth,
		"expiryYear": this.expiryYear,
		"cvc": this.cvc,
		"usa_user":this.userDetails.user_id,
		"price":this.voucherTprice,
		"cart_data":this.cartdata,
		
	}

	this.http.post(this.appUrl, data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == 0){
		loading.dismiss();
		this.alertController.create({
      
      message: this.res.msg,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		
		}else if(this.res.status == 1){
		//successalrt.present();
		
		this.navCtrl.navigateForward('voucher-thank');
		loading.dismiss();
		}else{
		alert.present();
		loading.dismiss();
		}
	}, (err) => {
		alert.present();
		loading.dismiss();
	});

	}



}

}
