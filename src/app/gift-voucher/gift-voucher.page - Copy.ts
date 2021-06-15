import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-gift-voucher',
  templateUrl: './gift-voucher.page.html',
  styleUrls: ['./gift-voucher.page.scss'],
})
export class GiftVoucherPage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/voucher_list";
res:any;
voucher_list:any;
voucher_total:number=0;
voucher_total_price:number=0;
userVoucher:any;
voucher_data:any =[];
voucherTcount:number=0;
voucherTprice:number=0;
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) { }
   async listing(){
         const loading = await this.loadingController.create({
    message: ''
  });  
       
         var headers = new Headers();
  loading.present();
   this.http.post(this.appUrl,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res.data_list){

    //this.voucher_list2 =this.res.data_list;
    this.voucher_list =this.res.data_list;
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

  ionViewWillEnter(){
//.storage.remove("voucherCart");
       this.listing();
       this.storage.get("voucherCart").then(val=>{
      if(val){
        this.userVoucher = val;
        this.voucher_data = val;
        console.log(val);

      }
        });

  }

  ngOnInit() {
  }

 


 incrementQty(index:number,id,menulist){
/*. if item passed then item.qty. */
  if(this.voucher_list[index].qty > 0){
     this.voucher_list[index].qty += 1;
     this.voucherTprice +=parseInt(this.voucher_list[index].price);
     //this.menu_list[index].quantity += 1;
     for (let p of this.voucher_data) {
            
            if (p.id == menulist.id) {
              p.qty=parseInt(this.voucher_list[index].qty);
              this.voucher_data.push(this.voucher_data[index]);
              this.storage.set("voucherCart", this.voucher_data);
              //this.getCartItemCount();
              break;
            }
          }
  }
  else{
      for (let p of this.voucher_data) {
            
            if (p.id == menulist.id) {
              p.qty=parseInt(this.voucher_data[index].qty);
              this.voucher_data.push(this.voucher_data[index]);
              this.storage.set("voucherCart", this.voucher_data);
              //this.getCartItemCount();
              break;
            }
          }
   //this.voucher_data.push(menulist);
           
           //this.storage.set("voucherCart", this.voucher_data);
     this.voucher_list[index].qty = 1;
    this.voucherTcount +=1;
    this.voucherTprice +=parseInt(this.voucher_list[index].price);
   }
  }

  decrementQty(index:number,id,menulist){
/*. if item passed then item.qty. */
  if(this.voucher_list[index].qty -1 <=0){
   this.voucherTprice -=parseInt(this.voucher_list[index].price);
      this.voucherTcount -=1;
   
     this.voucher_list[index].qty = 0;
     
     //this.menu_list[index].quantity += 1;
     for (let p of this.voucher_data) {
            
            if (p.id == menulist.id) {
              p.qty=parseInt(this.voucher_list[index].qty);
              this.voucher_list.push(this.voucher_list[index]);
             
              //this.getCartItemCount();
              break;
            }
          }
  }
  else{
   
     this.voucher_list[index].qty -= 1;
    this.voucherTprice -=parseInt(this.voucher_list[index].price);
    
   }
  }

  back(){
  
  		this.navCtrl.navigateForward('/sidebar');
  }

}
