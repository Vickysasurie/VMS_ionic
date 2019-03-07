import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmediatePage } from './immediate';
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [
    ImmediatePage,
  ],
  imports: [
    IonicPageModule.forChild(ImmediatePage),
    MomentModule
  ],
})
export class ImmediatePageModule {}
