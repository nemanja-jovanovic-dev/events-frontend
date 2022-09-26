import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('../public/modules/home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        RouterModule.forChild(routes)
    ]
})
export class SecuredModule {
}
