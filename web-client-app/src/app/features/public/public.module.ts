import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PublicPreviewComponent} from './public-preview/public-preview.component';
import {CoreModule} from '../../core/core.module';
import {HeaderModule} from '../../core/components/header/header.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'reservations', loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule)
  },
  {
    path: 'map', loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HeaderModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, PublicPreviewComponent],
  declarations: [
    PublicPreviewComponent,
  ]
})
export class PublicModule { }
