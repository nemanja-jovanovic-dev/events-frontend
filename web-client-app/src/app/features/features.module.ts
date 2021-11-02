import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicModule} from "./public/public.module";
import {SecuredModule} from "./secured/secured.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    SecuredModule,
    SharedModule
  ]
})
export class FeaturesModule { }
