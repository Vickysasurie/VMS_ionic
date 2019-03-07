import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	rootPage = 'TabsPage';

	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [
		{title: 'General', pageName: 'TabsPage', tabComponent: 'GeneralPage', index: 0, icon: 'ios-chatbubbles'},
		{title: 'Urgent', pageName: 'TabsPage', tabComponent: 'UrgentPage', index: 1, icon: 'eye'},
		{title: 'Carried Over', pageName: 'TabsPage', tabComponent: 'ImmediatePage', index: 2, icon: 'alert'},
	]

  logData:any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.logData = localStorage.getItem('userData');
	}

	openPage(page: PageInterface){
		let params = {};

		if(page.index){
			params = { tabIndex: page.index };
		}

		if(this.nav.getActiveChildNav() && page.index != undefined){
			this.nav.getActiveChildNav().select(page.index);
		}else{
			this.nav.setRoot(page.pageName, params);
		}
	}

	isAct(page: PageInterface){
		let childNav = this.nav.getActiveChildNav();

		if (childNav){
			if (childNav.getSelected() && childNav.getSelected().root == page.tabComponent) {
				return 'primary';
			}
			return;
		}
	}
	doLogout(){
	  localStorage.clear();
	  this.navCtrl.setRoot('LoginPage');
  }
}
