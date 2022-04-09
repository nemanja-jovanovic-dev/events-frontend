import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeContainerPreviewComponent} from './home-container-preview/home-container-preview.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../../../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {HomeContentComponent} from './home/components/home-content/home-content.component';
import {EventComponent} from '../../../../core/components/event/event.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: ':id',
        component: EventComponent
    }
];

@NgModule({
    declarations: [
        HomeContainerPreviewComponent,
        HomeComponent,
        HomeContentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule,
    ]
})
export class HomeModule {
}
