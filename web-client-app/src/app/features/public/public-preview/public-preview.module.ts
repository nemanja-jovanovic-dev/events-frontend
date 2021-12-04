import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', children: [
      {
        path: 'home',
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('../modules/reservations/reservations.module').then(m => m.ReservationsModule)
      },
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
})
export class PublicPreviewModule { }
