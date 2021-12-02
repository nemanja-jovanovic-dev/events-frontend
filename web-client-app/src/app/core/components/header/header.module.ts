import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
