import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationContainerPreviewComponent} from './registration-container-preview/registration-container-preview.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationContainerComponent,
  }
];

@NgModule({
  declarations: [
    RegistrationContainerPreviewComponent,
    RegistrationContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RegistrationModule { }
