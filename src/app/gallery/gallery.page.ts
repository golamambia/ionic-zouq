import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
appUrl = "https://digiworld.ie/project/zouq/api/gallery";
res:any;
gallery_list:any;
  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
  	
this.listing();
  }
  async listing(){
 	const loading = await this.loadingController.create({
    message: ''
  });
 		await loading.present();
  	
         var headers = new Headers();
  //console.log(this.userDetails.user_id);
   this.http.post(this.appUrl,{data:''}, { headers: headers })
	.subscribe(res => {
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.gallery_list){

		this.gallery_list =this.res.gallery_list;
		loading.dismiss();
		}else{
			this.gallery_list ='';
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});

  }

  back(){
  
  		this.navCtrl.navigateForward('/sidebar');
  }
}
