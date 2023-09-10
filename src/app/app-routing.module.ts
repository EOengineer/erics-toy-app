import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsListComponent } from './mlb/teams-list/teams-list.component';
import { LocalWeatherComponent } from './weather/local-weather/local-weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/mlb/teams', pathMatch: 'full' },
  { path: 'mlb/teams', component: TeamsListComponent },
  { path: 'weather/local', component: LocalWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
