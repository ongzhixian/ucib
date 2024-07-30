import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'work-page', component: WorkPageComponent },
];
