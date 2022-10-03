import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { OverviewContainerComponent } from './overview-container/overview-container.component';

export const routes: Routes = [
    { path: '', component: OverviewContainerComponent }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)]
})
export class OverviewModule {}
