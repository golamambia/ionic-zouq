import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/contact_post";
res:any;
ct_name: any;
ct_email: any;
ct_phone: any;
ct_subject:any;

  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) { }

  ngOnInit() {
  }

  back(){
  
  		this.navCtrl.navigateForward('/sidebar');
  }

  async save(){
const loading = await this.loadingController.create({
    message: 'Saving...'
  });
const alert = await this.alertController.create({
     message: 'Something is wrong',
      buttons: ['OK']
    });
const successalrt = await this.alertController.create({
     message: 'Thankyou for contacting us',
      buttons: ['OK']
    });
const ct_namealert = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });
const ct_emailalert = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });
const ct_phonealert = await this.alertController.create({
     message: 'Please enter phone',
      buttons: ['OK']
    });
const ct_subjectalert = await this.alertController.create({
     message: 'Please enter subject',
      buttons: ['OK']
    });


var headers = new Headers();
if(this.ct_name == '' || this.ct_name == null){
     
    loading.dismiss();
    ct_namealert.present();
  }else if(this.ct_email == '' || this.ct_email == null){
  loading.dismiss();
  ct_emailalert.present();
    
  }else if(this.ct_phone == '' || this.ct_phone == null){
  loading.dismiss();
  ct_phonealert.present();
    
  }else if(this.ct_subject == '' || this.ct_subject == null){
  loading.dismiss();
  ct_subjectalert.present();
    
  }else{

  await loading.present();
  var data ={
    "ct_name": this.ct_name,
    "ct_email": this.ct_email,
    "ct_phone": this.ct_phone,
    "ct_subject":this.ct_subject,
    
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
    this.ct_name='';
    this.ct_email='';
    this.ct_phone='';
    this.ct_subject='';
    
    loading.dismiss();
    }else{
    //alert("Server error");
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


}
