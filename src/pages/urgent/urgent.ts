import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";


/**
 * Generated class for the UrgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urgent',
  templateUrl: 'urgent.html',
})
export class UrgentPage {
  responseData:any;
  listData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data:DataProvider) {
  	this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000
    }).present();
  }

  getAppointments(){
    this.data.loadData("getUrgent").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
        this.listData = this.responseData.feedData;
        console.log(this.listData);
      }else {
        console.log()
      }
    }, (err) => {

    }).catch((err)=> {
      console.log('unHandledRejection', err.message);
    });
  }

  doRefresh(refresher){
    setTimeout(()=>{
      this.data.loadData("getUrgent").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData.feedData) {
          this.listData = this.responseData.feedData;
          console.log(this.listData);
        } else {
          console.log()
        }
      }, (err) => {

      }).catch((err)=>{
        console.log('unHandledRejection', err.message);
      });
      refresher.complete();
    },2000);
  }

  ionViewDidLoad(){
    this.getAppointments();

  }
  itemClicked(item):void{
    this.navCtrl.push('InfoPage', item);
  }

}
