import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventContainerComponent } from './event-container/event-container.component';
import { EventContentComponent } from './components/event-content/event-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { EventHeaderComponent } from './components/event-content/event-header/event-header.component';

const routes: Routes = [
    {
        path: ':id',
        component: EventContainerComponent
    },
];

@NgModule({
    declarations: [
        EventContainerComponent,
        EventContentComponent,
        EventHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule
    ],
    exports: [EventContainerComponent]
})
export class EventModule { }
