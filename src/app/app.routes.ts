import { Routes } from '@angular/router';
import { VoyagesComponent } from './components/voyages/components/voyages/voyages.component';
import { SimulationsComponent } from './components/simulations/components/simulations/simulations.component';
import { KpiComponent } from './components/kpi/components/kpi/kpi.component';
import { AdminPortalComponent } from './components/admin-portal/components/admin-portal/admin-portal.component';
import { SettingsComponent } from './components/settings/components/settings/settings.component';

// MsalGuard is required to protect routes and require authentication before accessing protected routes
import { MsalGuard } from '@azure/msal-angular';


export const routes: Routes = [
  { path: '', redirectTo: 'Voyages', pathMatch: 'full' },
  { path: 'Voyages', component: VoyagesComponent,  canActivate: [
      MsalGuard
    ]},
  { path: 'Simulations', component: SimulationsComponent },
  { path: 'KPI', component: KpiComponent },
  { path: 'AdminPortal', component: AdminPortalComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: '**',  redirectTo: 'Voyages',} 
];

