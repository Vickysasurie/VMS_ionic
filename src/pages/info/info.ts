import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	itemInfo:any;
  responseData:any;
  user_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
  	this.itemInfo = this.navParams.data;
    this.user_data= {"fee_id":this.itemInfo.unique_id,"desc":""};
  }

  acceptAppointment(){
    console.log(this.user_data);
    this.data.feedAccept(this.user_data,"feedAccept").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.success){
        this.navCtrl.popToRoot();
      }
    }, (err) => {

    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
  }

  rejectAppointment(){
    console.log(this.user_data);
    this.data.feedReject(this.user_data,"feedReject").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.success){
        this.navCtrl.popToRoot();
      }
    }, (err) => {

    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
  }

  postponeAppointment(){
    console.log(this.user_data);
    this.data.feedPostpone(this.user_data,"feedPostpone").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.success){
        this.navCtrl.popToRoot();
      }
    }, (err) => {

    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
  }

}
