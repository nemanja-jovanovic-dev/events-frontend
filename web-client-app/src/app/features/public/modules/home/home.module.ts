import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerPreviewComponent } from './home-container-preview/home-container-preview.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerPreviewComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    HomeContainerPreviewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }