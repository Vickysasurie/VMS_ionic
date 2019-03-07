import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrgentPage } from './urgent';
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [
    UrgentPage,
  ],
  imports: [
    IonicPageModule.forChild(UrgentPage),
    MomentModule
  ],
})
export class UrgentPageModule {}
