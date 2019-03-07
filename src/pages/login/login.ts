import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData:any;
  userLogData = {"username":"","password":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  doLogin(){
    this.dataProvider.postCheck(this.userLogData, "login").then((result)=>{
      this.responseData = result;
      console.log(this.responseData.userData);
      if (!this.responseData.error) {
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.setRoot('MenuPage');
      }else {
        console.log("No Access");
      }
    }, (err) => {

    }).catch((err)=> {
      console.log('unHandledRejection', err.message);
    });
  }
  signup(){
    this.navCtrl.push('SignupPage');
  }

}
