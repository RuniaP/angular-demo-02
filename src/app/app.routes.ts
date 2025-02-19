import { Routes } from '@angular/router';
import {DogDetailComponent} from './pages/dog-detail/dog-detail.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
      path: "dog-detail/:id",
    component: DogDetailComponent
  },

];
