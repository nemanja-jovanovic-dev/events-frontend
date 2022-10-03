import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { EventHeaderComponent } from './components/event-header/event-header.component';
import { EventContentComponent } from './components/event-content/event-content.component';
import { EventContainerComponent } from './event-container/event-container.component';
import { EventNavigationComponent } from './components/event-navigation/event-navigation.component';

const routes: Routes = [
    {
        path: ':id',
        component: EventContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                loadChildren: () => import('../../shared/components/overview/overview.module').then(m => m.OverviewModule)
            },
            {
                path: 'photos',
                loadChildren: () => import('.././map/map.module').then(m => m.MapModule)
            }

        ]
    },
];

@NgModule({
    declarations: [
        EventContainerComponent,
        EventHeaderComponent,
        EventContentComponent,
        EventNavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule,
        MatTabsModule,
    ],
    exports: []
})
export class EventModule { }
