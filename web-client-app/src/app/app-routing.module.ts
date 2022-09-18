import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FourOFourPageComponent} from './core/components/four-o-four-page/four-o-four-page.component';
import {PreloadUserDataGuard} from './core/guards/preload-user-data.guard';

const routes: Routes = [
    {path: '', redirectTo: 'p', pathMatch: 'full'},
    {
        path: 'p',
        loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule)
    },
    {
        path: 's',
        canActivate: [PreloadUserDataGuard],
        loadChildren: () => import('./features/secured/secured.module').then(m => m.SecuredModule)
    },
    {path: 'event', loadChildren: () => import('./core/components/event/event/event.module').then(m => m.EventModule)},
    {
        path: '**',
        component: FourOFourPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
