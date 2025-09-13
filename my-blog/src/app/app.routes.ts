import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { All } from './pages/all/all';
import { Couples } from './pages/couples/couples';
import { Fitness } from './pages/fitness/fitness';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'all', component:All},
    {path:'couples', component:Couples},
    {path:'fitness', component:Fitness},
    {path:'about', component:About}
];
