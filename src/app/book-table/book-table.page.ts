import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.page.html',
  styleUrls: ['./book-table.page.scss'],
})
export class BookTablePage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/book_table";
res:any;
bt_date: any;
bt_time: any;
bt_guest: any;
bt_name:any;
bt_email: any;
bt_phone:any;
bt_subject:any;
    constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location,

   ) { }

  ngOnInit() {
  }
  async bookTable(){
const loading = await this.loadingController.create({
    message: 'Booking...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const successalrt = await this.alertController.create({
     message: 'Thank you for your booking. we will contact you soon',
      buttons: ['OK']
    });
const bt_datealert = await this.alertController.create({
     message: 'Please select date',
      buttons: ['OK']
    });
const bt_timealert = await this.alertController.create({
     message: 'Please select time',
      buttons: ['OK']
    });
const bt_guestalert = await this.alertController.create({
     message: 'Please select guest',
      buttons: ['OK']
    });
const bt_namealert = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });
const bt_emailalert = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });
const bt_phonealert = await this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    });
const bt_subjectalert = await this.alertController.create({
     message: 'Please enter description',
      buttons: ['OK']
    });

var headers = new Headers();
if(this.bt_date == '' || this.bt_date == null){
     
    loading.dismiss();
    bt_datealert.present();
  }else if(this.bt_time == '' || this.bt_time == null){
  loading.dismiss();
  bt_timealert.present();
    
  }else if(this.bt_guest == '' || this.bt_guest == null){
  loading.dismiss();
  bt_guestalert.present();
    
  }else if(this.bt_name == '' || this.bt_name == null){
  loading.dismiss();
  bt_namealert.present();
    
  }else if(this.bt_email == '' || this.bt_email == null){
  loading.dismiss();
  bt_emailalert.present();
    
  }else if(this.bt_phone == '' || this.bt_phone == null){
  loading.dismiss();
  bt_phonealert.present();
    
  }else if(this.bt_subject == '' || this.bt_subject == null){
  loading.dismiss();
  bt_subjectalert.present();
    
  }else{

  await loading.present();
  var data ={
    "bt_date": this.bt_date,
    "bt_time": this.bt_time,
    "bt_guest": this.bt_guest,
    "bt_name":this.bt_name,
    "bt_email": this.bt_email,
    "bt_phone":this.bt_phone,
    "bt_subject":this.bt_subject,
  }

  this.http.post(this.appUrl, data, { headers: headers })
  .subscribe(res => {
    //console.log(res.json());
    this.res = res.json();
    if(this.res.status == 0){
    loading.dismiss();
     alert.present();
    
    }else if(this.res.status == 1){
    successalrt.present();
    this.bt_date='';
    this.bt_time='';
    this.bt_guest='';
    this.bt_name='';
    this.bt_email='';
    this.bt_phone='';
    this.bt_subject='';
    loading.dismiss();
    }else{
   alert.present();
    loading.dismiss();
    }
  }, (err) => {
    alert.present();
    //console.log(err);
    loading.dismiss();
  });

  }



}

  back(){
  
  		this.navCtrl.navigateForward('/sidebar');
  }

}
