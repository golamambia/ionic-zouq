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
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) { this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        //console.log(val);
    }
        });
 }
   ionViewWillEnter(){
//this.storage.remove("voucherCart");
       this.listing();
       //this.getCartItemCount();
       this.getProceed();
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

  ngOnInit() {
  }
  getProceed() {
   this.count=0;
    this.countP=0;
    this.btn_check = 0;
    this.storage.get("voucherCart").then(val=>{
      if(val){
       // console.log(val);
       for (let p of val) {
            
            if (p.qty >0) {
              this.count += 1;
             this.countP += p.qty*p.price;
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

    for (let pro of this.voucher_list) {
    for (let p of this.voucher_data1) {
            
            if (p.id == pro.id) {
              pro.qty =p.qty;
                           
              //break;
            }
          }
        }
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

  

 


 incrementQty(index:number,id,menulist){
/*. if item passed then item.qty. */
  if(this.voucher_list[index].qty > 0){
    
     this.voucher_list[index].qty += 1;
     //this.voucherTprice +=parseInt(this.voucher_list[index].price);
     //this.menu_list[index].quantity += 1;
     for (let p of this.voucher_data1) {
            
            if (p.id == menulist.id) {
              p.qty =this.voucher_list[index].qty;
              
              this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});
              //this.getProceed();
              break;
            }
          }
  }
  else{

   

    this.storage.get("voucherCart").then(val=>{
       
      let added = false;
      if(val){
        
        this.voucher_data1 = val;
        for (let p of this.voucher_data1) {
           
            if (p.id == menulist.id) {
              this.voucher_list[index].qty = 1;
              p.qty =this.voucher_list[index].qty;
             
              this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});
              added = true;
              
              break;
            }
          }

          if (!added) {
           
            this.voucher_list[index].qty = 1;
              this.voucher_data1.push(menulist);
              this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});;
      
              //this.getProceed();
           }


      }else{
       
        //menulist.qty = 1;
       this.voucher_list[index].qty = 1;
      
      this.voucher_data1.push(menulist);
      this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});;
      //this.getProceed();
      }


        });
   
    //this.voucherTcount +=1;
    //this.voucherTprice +=parseInt(this.voucher_list[index].price);
   }
  }

  decrementQty(index:number,id,menulist){
/*. if item passed then item.qty. */
  if(this.voucher_list[index].qty -1 <=0){
   //this.voucherTprice -=parseInt(this.voucher_list[index].price);
      //.voucherTcount -=1;
   
     this.voucher_list[index].qty = 0;
     
     //this.menu_list[index].quantity += 1;
     for (let p of this.voucher_data1) {
            
            if (p.id == menulist.id) {
              p.qty=0;
             this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});
             //this.getProceed();
              break;
            }
          }
  }
  else{
   for (let p of this.voucher_data1) {
            
            if (p.id == menulist.id) {
              p.qty=parseInt(p.qty) - 1;
              this.storage.set("voucherCart", this.voucher_data1).then(val=>{ this.getProceed();});
             
          //this.getProceed();
              break;
            }
          }
     this.voucher_list[index].qty -= 1;
    //this.voucherTprice -=parseInt(this.voucher_list[index].price);
    
   }
  }

  back(){
  
  		this.navCtrl.navigateForward('/sidebar');
  }

}
