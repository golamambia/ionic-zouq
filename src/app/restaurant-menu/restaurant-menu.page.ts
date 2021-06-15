import { Component, OnInit,ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.page.html',
  styleUrls: ['./restaurant-menu.page.scss'],
})
export class RestaurantMenuPage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/item_list";
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	res:any;
	userDetails: any;
	editid: any;
 item_qty:any;
  usa_user: any;
  menu_list:any;
  cart_data:any =[];
  userCart:any;
  abc:any;
  cartTotal:any;
  cartcount:any=0;
  search_key: any;
  public cart = [];
  mainMenuId:any;
  loader_val:any = true;
  pageNo = 1;
  dataMenu: any =[];
  limit = 9;
  count: any = 0;
 constructor(
   public http: Http, 
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,public toastController: ToastController,
   public route: ActivatedRoute,
   private location: Location
   ) { 
  
  }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.mainMenuId=params.main_menu;
    //console.log(this.mainMenuId);
  }
});

  }
  doRefresh(event) {
setTimeout(() => {
      
     //this.listing_menu();
     var headers = new Headers();
     if (!this.mainMenuId) {
    this.mainMenuId=0;
  }
  if (!this.search_key) {
    this.search_key='';
  }
    var dataPar ={
        "mainMenuId": this.mainMenuId,
        "search": this.search_key,
        
  }
     this.http.post(this.appUrl,dataPar, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res && this.res.menu_list){
// loading.dismiss();
event.target.complete();
this.loader_val = false;
    this.menu_list =this.res.menu_list;
    if(this.menu_list && this.menu_list.length > 0){
      this.dataMenu = [];
      for (let i = 0; i < this.limit; i++) {
        if(this.menu_list[i]){
          this.dataMenu.push(this.menu_list[i]);
        }
     }
    }else{
      this.dataMenu = [];
    }
    for (let pro of this.menu_list) {
    for (let p of this.cart_data) {
            
            if (p.menu_id == pro.menu_id) {
              pro.quantity =p.quantity;
                           
              //break;
            }
          }
        }
    
    }else{
    //alert("Server error");
    // loading.dismiss();
    this.loader_val = false;
    event.target.complete();
    }
  }, (err) => {
    //console.log(err);
    // loading.dismiss();
    this.loader_val = false;
    event.target.complete();
  });
      
     
    }, 1500);
}
  back(){
  
      //this.navCtrl.navigateForward('/');
       this.location.back();
  }

  loadData(event){
    //console.log(event);
    this.getScrollData(true, event); 
    
  }

  getScrollData(isFirstLoad, event) {
    setTimeout(()=>{ 
      this.dataMenu = [];
      this.limit = this.limit + 9;
      for (let i = 0; i < this.limit; i++) {
          if(this.menu_list[i]){
            this.dataMenu.push(this.menu_list[i]);
          }
       }
       this.pageNo++;
       

      if (isFirstLoad)
        event.target.complete();
    }, 1000);
  }

async listing(){
  //console.log(this.search_key);
  const loading = await this.loadingController.create({
    message: ''
  });
  //await loading.present();
  this.loader_val = true;
  	this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        var data ={
				"userId": this.userDetails.user_id,
				
	}
  }
        });
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
  if (!this.mainMenuId) {
    this.mainMenuId=0;
  }
  if (!this.search_key) {
    this.search_key='';
  }
    var dataPar ={
        "mainMenuId": this.mainMenuId,
        "search": this.search_key,
        
  }
  
   this.http.post(this.appUrl,dataPar, { headers: headers })
	.subscribe(res => {
		this.res = res.json();
		//console.log(this.res);
		 if(this.res && this.res.menu_list){
// loading.dismiss();
this.loader_val = false;
		this.menu_list =this.res.menu_list;
    if(this.menu_list && this.menu_list.length > 0){
      this.dataMenu = [];
      for (let i = 0; i < this.limit; i++) {
        if(this.menu_list[i]){
          this.dataMenu.push(this.menu_list[i]);
        }
     }
    }else{
      this.dataMenu = [];
    }
    for (let pro of this.menu_list) {
    for (let p of this.cart_data) {
            
            if (p.menu_id == pro.menu_id) {
              pro.quantity =p.quantity;
                           
              //break;
            }
          }
        }
		
		}else{
		//alert("Server error");
		// loading.dismiss();
    this.loader_val = false;
		}
	}, (err) => {
		//console.log(err);
		// loading.dismiss();
    this.loader_val = false;
	});
    
  }

  ionViewWillEnter(){
  	// this.storage.remove("userCart");
  	 this.listing();
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
        //console.log(val);

      }
        });
this.getCartItemCount();
  }
  getProducts() {
    //return this.data;
  }

  getCart() {
    return this.cart_data;
  }

  getCartItemCount() {
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
       for (let p of this.cart_data) {
            
            if (p.quantity >0) {
              this.count += 1;

            }
          }
this.cartTotal=this.count;
this.cartcount = this.count;
      }else{
this.cartTotal=this.count;
      }
        });

  }
async addToCart(index:number,menu_id,menulist){
  const toast = await this.toastController.create({
message: 'Added',
duration: 1000,
animated :true,
//color:'success',
position:'middle',
cssClass: 'my-toast-class',
});
  let added = false;
  // var data ={
  //   "id": menu_id,
  //    "name":menu_name,
  //    "price":menu_price,
  //    "quantity":1,
  //    "image":menu_image
  // }
  this.storage.get("userCart").then(val=>{
     this.abc =[];
    let added = false;
      if(val){
        this.cart_data = val;
        
          for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              this.dataMenu[index].quantity += 1;
              //this.menu_list[index].quantity += 1;
              p.quantity =parseInt(p.quantity) + 1;
              added = true;
              //this.cart_data.push(menulist);
              this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
              //this.getCartItemCount();
               toast.present();
                
              break;
            }
          }
          if (!added) {
           
            menulist.quantity = 1;
           this.cart_data.push(menulist);
           
             this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
            
            //this.getCartItemCount();
            toast.present();
           }
          //else{
          //   this.getCartItemCount();

          //   this.storage.set("userCart", this.cart_data);
          // }

      }else{
            menulist.quantity = 1;
           this.cart_data.push(menulist);
            //this.getCartItemCount();
                        this.storage.set("userCart", this.cart_data).then(val=>{ this.getCartItemCount();});
           toast.present();
      }
     });
      
       
}
  

 decrementQty(index:number,menu_id,menulist){

/*. if item passed then item.qty. */
  if(this.dataMenu[index].quantity-1 <=0){
    this.dataMenu[index].quantity = 0;
    //this.menu_list[index].quantity = 0;
    for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=0;
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
  }
  else{
    this.dataMenu[index].quantity -= 1;
    //this.menu_list[index].quantity -= 1;
    for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=parseInt(this.dataMenu[index].quantity);
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
    //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);
  }
  }


 incrementQty(index:number,menu_id,menulist){
/*. if item passed then item.qty. */
  if(this.dataMenu[index].quantity > 0){
     this.dataMenu[index].quantity += 1;
     //this.menu_list[index].quantity += 1;
     for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=parseInt(this.dataMenu[index].quantity);
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data);
              this.getCartItemCount();
              break;
            }
          }
  }
  // else{
   
  //   this.menu_list[index].quantity = 1;
    
    
  // }
  }


 



}
