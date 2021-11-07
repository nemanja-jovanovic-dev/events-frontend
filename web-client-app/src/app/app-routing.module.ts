import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'p', pathMatch: 'full'},
  {
    path: 'p',
    loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 's',
    loadChildren: () => import('./features/secured/secured.module').then(m => m.SecuredModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}