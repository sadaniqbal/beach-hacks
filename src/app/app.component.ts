import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tabBarElement: any;
  splash = true;

  // email: string;
  // password: string;

  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'List',
  //     url: '/list',
  //     icon: 'list'
  //   }
  // ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public navCtrl: NavController,
    // private statusBar: StatusBar,
    // private screenOrientation: ScreenOrientation

    // public authService: AuthService
  ) {
    this.tabBarElement = document.querySelector('.tabbar');
    // this.initializeApp();
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //     setTimeout(() => {
  //       this.splash = false;
  //     }, 0);
  //   });
}
