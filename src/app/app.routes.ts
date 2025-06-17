import { Routes } from '@angular/router';
import { VoyagesComponent } from './components/voyages/components/voyages/voyages.component';
import { SimulationsComponent } from './components/simulations/components/simulations/simulations.component';
import { KpiComponent } from './components/kpi/components/kpi/kpi.component';
import { AdminPortalComponent } from './components/admin-portal/components/admin-portal/admin-portal.component';
import { SettingsComponent } from './components/settings/components/settings/settings.component';

export const routes: Routes = [
  { path: 'Voyages', component: VoyagesComponent },
  { path: 'Simulations', component: SimulationsComponent },
  { path: 'KPI', component: KpiComponent },
  { path: 'AdminPortal', component: AdminPortalComponent },
  { path: 'Settings', component: SettingsComponent },
];
