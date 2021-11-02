import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavContainerComponent } from './header-nav-container/header-nav-container.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    HeaderNavContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderNavContainerComponent
  ]
})
export class HeaderNavModule { }
