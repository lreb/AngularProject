import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './modules/public/layout/public/public.component';
import { PrivateComponent } from './modules/private/layout/private/private.component';
import { HomeComponent } from './modules/public/pages/home/home.component';
import { OverviewComponent } from './modules/private/pages/overview/overview.component';
import { AuthGuard } from './core/guards/auth-guard.service';

const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];


const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'private', pathMatch: 'full' },
  { path: 'private', component: OverviewComponent },
  { path: '**', redirectTo: 'private' }
];

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard], data: { title: 'Private Views' }, children: SECURE_ROUTES },
  { path: '**', redirectTo: 'public' }
];

@NgModule({
  declarations: [PublicComponent, PrivateComponent, HomeComponent, OverviewComponent],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
