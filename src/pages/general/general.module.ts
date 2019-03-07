import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralPage } from './general';
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [
    GeneralPage,

  ],
  imports: [
    IonicPageModule.forChild(GeneralPage),
    MomentModule
  ],
})
export class GeneralPageModule {}
