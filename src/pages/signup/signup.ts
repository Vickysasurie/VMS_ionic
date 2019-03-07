import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { DataProvider} from "../../providers/data/data";


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData:any;
  userData = {"username":"","password":"","email":"","name":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataProvider: DataProvider) {
  }

  doSignup(){
    this.dataProvider.postCheck(this.userData, "signup").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (!this.responseData.error){
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.setRoot('MenuPage');
      }else {
        console.log("local storage error");
      }
    }, (err) => {

    }).catch((err)=> {
      console.log('unHandledRejection', err.message);


    });

  }

}
