import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
userDetails: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    public storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
      }
    })
  }

  menuOpened1(){
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
      }
    })
  }

  menuClose(){
    this.menu.close();
  }
  logout(){
  
    this.storage.set("userDetails", null);
    this.userDetails = null;
    this.navCtrl.navigateForward('home');
     this.menu.close();

  }
}
