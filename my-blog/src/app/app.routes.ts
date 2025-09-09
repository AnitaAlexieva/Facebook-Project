import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { All } from './pages/all/all';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'all', component:All}
];
