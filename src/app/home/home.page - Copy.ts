import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
main_menu = "https://digiworld.ie/project/zouq/api/main_menu";
restu_item = "https://digiworld.ie/project/zouq/api/home_item_list";
main_menu_slide = "https://digiworld.ie/project/zouq/api/main_menu_slide";
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
  cartTotalAmount:any=0;
  cartcount:any;
  count: any = 0;
  public cart = [];
public cartdata = [];
main_menu_list:any;
menu_slide_list:any;
CountryStateHtml:any;

img_url: any='https://digiworld.ie/project/zouq/uploads/category/';
menuimg_url: any='https://digiworld.ie/project/zouq/uploads/menuImages/';
 constructor(public http: Http, public navCtrl: NavController, public storage: Storage,public loadingController: LoadingController,public alertController: AlertController,public toastController: ToastController,public route: ActivatedRoute) { 
  
  }
  ngOnInit() {
    this.storage.get("CountryState").then(val=>{
      if(val){
   this.CountryStateHtml=val;
}else{
   var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.get('https://api.ipdata.co?api-key=test', { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
    this.storage.set("CountryState", this.res.region+','+this.res.country_name);
     this.CountryStateHtml=this.res.region+','+this.res.country_name;
  }, (err) => {
    console.log(err);
    
  });
}
        });
  }

  ionViewWillEnter(){
  	// this.storage.remove("userCart");
  	this.storage.get("CountryState").then(val=>{
      if(val){
   this.CountryStateHtml=val;
}
});
    this.listing_menu();
    this.listing();
       this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
        //console.log(val);

      }
        });
this.getCartItemCount();
this.getOurFood();

  }
  getOurFood(){

         var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.main_menu,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res.main_category);
     if(this.res.main_category){

    this.main_menu_list =this.res.main_category;
    for (let pro of this.main_menu_list) {
              if(pro.cat_image){
               pro.cat_image =this.img_url.concat(pro.cat_image); 
              }
              
             
        }
    //loading.dismiss();
    }else{
      this.main_menu_list ='';
    //alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    
  });
  }
  getCartItemCount() {
    
    //let count=0;
    this.cartdata=[];
    this.cartTotalAmount=0;
    this.count=0;
    this.storage.get("userCart").then(val=>{
      if(val){
        this.userCart = val;
        this.cart_data = val;
       for (let p of this.userCart) {
            
            if (p.quantity >0) {
              this.count += 1;
              this.cartTotalAmount +=p.menu_price*p.quantity;
              this.cartdata.push(p);
            }
          }
          this.cart_data =this.cartdata;
          //console.log(this.count);
this.cartTotal=this.count;
this.cartcount = this.count;
//this.menu_list =this.cartdata;
//console.log(this.cartdata);
      }else{
this.cartTotal=this.count;
//this.menu_list =this.cartdata;
this.cartcount = this.count;
      }
        });

  }
  doRefresh(event) {
//this.navCtrl.navigateForward('/');
    setTimeout(() => {
      this.listing();
     //this.listing_menu();
     var headers = new Headers();
     this.http.post(this.main_menu_slide,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res.main_menu){

this.menu_slide_list =this.res.main_menu;
    for (let pro of this.res.main_menu) {
              
              pro.menu_image =this.menuimg_url.concat(pro.menu_image);
             
        }
     event.target.complete();
    }else{
    event.target.complete();
    }
  }, (err) => {
    event.target.complete();
  });
      
     
    }, 2000);
  }

  async listing(){
  const loading = await this.loadingController.create({
    message: ''
  });
  //await loading.present();
    
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
  
   this.http.post(this.restu_item,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
//loading.dismiss();
    this.menu_list =this.res.menu_list;
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
    //loading.dismiss();
    }
  }, (err) => {
    //console.log(err);
    //loading.dismiss();
  });
    
  }

async listing_menu(){
  const loading = await this.loadingController.create({
    message: ''
  });
  await loading.present();
    
         var headers = new Headers();
  
   this.http.post(this.main_menu_slide,{data:''}, { headers: headers })
  .subscribe(res => {
    this.res = res.json();
    //console.log(this.res);
     if(this.res.main_menu){

this.menu_slide_list =this.res.main_menu;
    for (let pro of this.res.main_menu) {
              
              pro.menu_image =this.menuimg_url.concat(pro.menu_image);
             
        }
    loading.dismiss();    
    }else{
    //alert("Server error");
    loading.dismiss();
    }
  }, (err) => {
    //console.log(err);
    loading.dismiss();
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
        this.userCart = val;
        this.cart_data = val;
        
          for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              this.menu_list[index].quantity += 1;
              p.quantity =parseInt(p.quantity) + 1;
              added = true;
              //this.cart_data.push(menulist);
              this.storage.set("userCart", this.cart_data).then(()=>{
             this.getCartItemCount();
           })

              
               toast.present();
                
              break;
            }
          }
          if (!added) {
           
            menulist.quantity = 1;
           this.cart_data.push(menulist);
           
           this.storage.set("userCart", this.cart_data).then(()=>{
             this.getCartItemCount();
           })
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
            
           this.storage.set("userCart", this.cart_data).then(()=>{
             this.getCartItemCount();
           })
           //this.getCartItemCount();
           toast.present();
      }
     });
      
       
}
  

 decrementQty(index:number,menu_id,menulist){

/*. if item passed then item.qty. */
  if(this.menu_list[index].quantity-1 <=0){
    this.menu_list[index].quantity = 0;
    for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=0;
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data).then(()=>{
                 this.getCartItemCount();
              });
             
              break;
            }
          }
  }
  else{
    this.menu_list[index].quantity -= 1;
    for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=parseInt(p.quantity) - 1;
              //console.log(this.cart_data);
              this.storage.set("userCart", this.cart_data).then(()=>{
                 this.getCartItemCount();
              });
              break;
            }
          }
    //console.log('item_2-> ' + index +  '  '+this.menu_list[index].quantity);
  }
  }


 incrementQty(index:number,menu_id,menulist){
/*. if item passed then item.qty. */
  if(this.menu_list[index].quantity > 0){
     this.menu_list[index].quantity += 1;
     for (let p of this.cart_data) {
            
            if (p.menu_id == menulist.menu_id) {
              p.quantity=parseInt(p.quantity) + 1;
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
gotoMenu(id){
this.navCtrl.navigateForward('/restaurant-menu?main_menu='+id);
}
gotoList(){
  this.navCtrl.navigateForward('/restaurant-menu');
}
}
