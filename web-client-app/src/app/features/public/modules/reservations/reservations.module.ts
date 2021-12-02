import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerPreviewComponent} from '../home/home-container-preview/home-container-preview.component';
import {HomeComponent} from '../home/home/home.component';
import {SharedModule} from '../../../../shared/shared.module';
import { ReservationsContainerPreviewComponent } from './reservations-container-preview/reservations-container-preview.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsContainerPreviewComponent,
  }
];

@NgModule({
  declarations: [
    ReservationsContainerPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReservationsModule { }
