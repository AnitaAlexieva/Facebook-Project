import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { All } from './pages/all/all';
import { Couples } from './pages/couples/couples';
import { Fitness } from './pages/fitness/fitness';
import { About } from './pages/about/about';
import { Register } from './user/register/register';
import { Login } from './user/login/login';
import { ErrorPage } from './pages/error-page/error-page';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'all', component:All},
    {path:'couples', component:Couples},
    {path:'fitness', component:Fitness},
    {path:'about', component:About},
    {path:'register', component:Register},
    {path:'login', component:Login},
    {path:'**',component: ErrorPage }
];
