import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
  public responseData:any;
  public userDetails:any;
  public listData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data: DataProvider) {
    this.userDetails = localStorage.getItem('userData');
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000
    }).present();

  }
  getAppointments(){
    this.data.loadData("getGeneral").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
        this.listData = this.responseData.feedData;
        console.log(this.listData);
      }else {
        console.log()
      }
    }, (err) => {
        console.log("Rejection");
    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
  }

  doRefresh(refresher){
    setTimeout(()=>{
      this.data.loadData("getGeneral").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData.feedData) {
          this.listData = this.responseData.feedData;
          console.log(this.listData);
        } else {
          console.log()
        }
      }, (err) => {
        console.log("Rejection");
      }).catch((err)=> {
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
